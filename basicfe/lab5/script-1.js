'use strict';

const refs = {
	form: document.querySelector('.form'),
	formOutputContainer: document.querySelector('.form-output-container'),
};
const rules = {
	credentials: new RegExp(/^[А-ЯҐЄІЇ]{1}[а-яґєії]+\s{1}([а-яґєіїА-ЯҐЄІЇ]{1}.){2}$/),
	variant: new RegExp(/\d{2,}/),
	group: new RegExp(/^[А-ЯҐЄІЇ]{2}-[0-9]{2}$/),
	faculty: new RegExp(/^[А-ЯҐЄІЇ]{4}$/),
	birth: new RegExp(/\d{2}\.\d{2}\.\d{4}/),
};
const resetErrors = (names) => {
	for (const name of names) {
		const inputEl = refs.form.querySelector(`[name='${name}']`);
		inputEl.classList.remove('input-invalid');
	}

};
const resetFormOutput = () => {
	refs.formOutputContainer.innerHTML = '';
};
const renderFormData = (data) => {
	const markup = `
		<h2>Введені дані:</h2>
		<ul>
			<li>ПІБ: <span>${data.credentials}</span></li>
			<li>Група: <span>${data.variant}</span></li>
			<li>Факультет: <span>${data.faculty}</span></li>
			<li>Адреса: <span>${data.address}</span></li>
			<li>Telegram: <span>${data.telegram}</span></li>
		</ul>
	`;
	refs.formOutputContainer.insertAdjacentHTML('afterbegin', markup);
};
const validateForm = () => {
	const validationErrors = [];
	const formValues = {};
	const formData = new FormData(refs.form);
	resetErrors(formData.keys());
	resetFormOutput();
	for (const [key, value] of formData) {
		console.log(key, rules[key]);
		const isValueValid = rules[key].test(value.trim());
		if (!isValueValid) {
			const inputEl = refs.form.querySelector(`[name='${key}']`);
			inputEl.classList.add('input-invalid');
			validationErrors.push({ name: key });
		} else {
			formValues[key] = value;
		}
	}
	return {
		validationErrors,
		formValues,
	};
};
refs.form.addEventListener('submit', (e) => {
	e.preventDefault();
	const { validationErrors, formValues } = validateForm();
	if (validationErrors.length !== 0) return;

	renderFormData(formValues);
});

document.addEventListener("DOMContentLoaded", function () {
  // Task 1
  const taskN = 9;

  const el = document.querySelectorAll("body > *")[taskN + 1];
  const nextEl = document.querySelectorAll("body > *")[taskN + 2];
  const ul = document.getElementById("ul-1");
  const ol = document.querySelector(".ol-1");

  el.addEventListener("click", () => ul.classList.toggle("active"))
  nextEl.addEventListener("click", () => ol.classList.toggle("active"))

  // Task 2
  const btnAdd = document.getElementById("btn-add");
  const btnZoomIn = document.getElementById("btn-zoom-in");
  const btnZoomOut = document.getElementById("btn-zoom-out");
  const btnDelete = document.getElementById("btn-delete");

  const imagesWrapper = document.querySelector(".images-wrapper");
  const imgCopy = document.querySelector(".image-1").cloneNode();

  btnAdd.addEventListener("click", () => {
    const imgCopy2 = document.querySelector(".image-1")?.cloneNode() || imgCopy;
    imagesWrapper.prepend(imgCopy2)
  });
  btnDelete.addEventListener("click", () => document.querySelector(".image-1").remove())

  let imagesScale = 1;
  btnZoomIn.addEventListener("click", () => {
    const images = document.querySelectorAll("img");
    if (!images.length) return;

    imagesScale += 0.05;
    images.forEach(function (img) {
      img.style.transform = `scale(${imagesScale})`;
    })
  })
  btnZoomOut.addEventListener("click", () => {
    const images = document.querySelectorAll("img");
    if (!images.length) return;

    imagesScale -= 0.05;
    images.forEach(function (img) {
      img.style.transform = `scale(${imagesScale})`;
    })
  })
})
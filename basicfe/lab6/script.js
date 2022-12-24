"use strict";

document.addEventListener("DOMContentLoaded", async () => {
  const rootElement = document.querySelector(".result__container");
  const loaderElement = document.querySelector(".load__container");
  console.log(rootElement, loaderElement);
  new DataLoader(rootElement, loaderElement);
});

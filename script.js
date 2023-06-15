/** @format */

document
  .querySelector(".sidebar_item")
  .addEventListener("click", () =>
    document.querySelector(".sidebar").classList.toggle("full")
  );

let nameEl = document.querySelector("#name");
let emailEl = document.querySelector("#email");
let languageEl = document.querySelector("#language");
let descriptionEL = document.querySelector("#description");
let submitBtnEl = document.querySelector("#submitBtn");
let imageUrlEl = document.querySelector("#imageUrl");
let arr = [];

submitBtnEl.addEventListener("click", () => {
  arr.push(nameEl.value);
  arr.push(emailEl.value);
  arr.push(languageEl.value);
  arr.push(descriptionEL.value);
  arr.push(imageUrlEl.value);

  localStorage.setItem(nameEl.value, arr);
});

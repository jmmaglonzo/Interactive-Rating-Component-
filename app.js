"use strict";

const rating = document.getElementById("selected-number");
const rate = document.querySelectorAll(".numbers");
const submitBtn = document.getElementById("submit");
const reviewSection = document.querySelector(".review-section");
const thanksSection = document.querySelector(".ty-section");
const active = (submitBtn.disabled = true);
const enableButton = function () {
  submitBtn.disabled = false;
};

const toggleHiddenClass = function () {
  reviewSection.classList.toggle("hidden");
  thanksSection.classList.toggle("hidden");
};

submitBtn.addEventListener("click", toggleHiddenClass);

rate.forEach((rate) => {
  rate.addEventListener("click", function () {
    rating.textContent = rate.textContent;
    enableButton();
  });
});

backBtn.addEventListener("click", function () {
  toggleHiddenClass();
});

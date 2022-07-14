"use strict";

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let curSlide = 0;
const maxSlide = slides.length - 1;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);

//=== next slide  ===//
const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
next.addEventListener("click", nextSlide);

//=== previous slide  ===//
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
prev.addEventListener("click", prevSlide);

//=== prev and next with key press  ===//
document.addEventListener("keydown", function (e) {
  e.key === "ArrowLeft" && prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

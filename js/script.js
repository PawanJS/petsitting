"use script";

const picture = document.querySelector(".gallery__item--1");
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".gallery--link");
const overlay = document.getElementById("overlay");
const imageOverlay = document.querySelector(".gallery--overlay");
const figcaption = document.querySelector(".gallery__img--description");

const openImage = function () {
  openBtn.classList.add("hidden");
  figcaption.classList.add("hidden");
  overlay.classList.add("active");
  picture.classList.add("pop-image");
  imageOverlay.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  document.querySelector("body").style.overflow = "hidden";
};

const closeImage = function () {
  openBtn.classList.remove("hidden");
  figcaption.classList.remove("hidden");
  overlay.classList.remove("active");
  picture.classList.remove("pop-image");
  imageOverlay.classList.remove("hidden");
  closeBtn.classList.add("hidden");
  document.querySelector("body").style.overflow = "auto";
};

openBtn.addEventListener("click", function () {
  openImage();
});

closeBtn.addEventListener("click", function () {
  closeImage();
});

overlay.addEventListener("click", function () {
  closeImage();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeImage();
  }
});

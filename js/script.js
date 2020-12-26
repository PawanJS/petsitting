"use script";

const pictures = document.querySelectorAll(".gallery__item");
const closeBtn = document.querySelectorAll(".close-btn");
const openBtn = document.querySelectorAll(".gallery--link");
const overlay = document.getElementById("overlay");
const imageOverlay = document.querySelectorAll(".gallery--overlay");
const figcaption = document.querySelectorAll(".gallery__img--description");

const openImage = function (element) {
  element.classList.add("pop-image");
  overlay.classList.add("active");
};

const closeImage = function (element) {
  element.classList.remove("pop-image");
  overlay.classList.remove("active");
};

for (let i = 0; i < pictures.length; i++) {
  openBtn[i].addEventListener("click", function () {
    openImage(pictures[i]);
    openBtn[i].classList.add("hidden");
    figcaption[i].classList.add("hidden");
    imageOverlay[i].classList.add("hidden");
    closeBtn[i].classList.remove("hidden");
  });
  closeBtn[i].addEventListener("click", function () {
    closeImage(pictures[i]);
    openBtn.classList[i].remove("hidden");
    figcaption.classList[i].remove("hidden");
    imageOverlay.classList[i].remove("hidden");
    closeBtn.classList[i].add("hidden");
  });
}

// overlay.addEventListener("click", function () {
//   closeImage();
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     closeImage();
//   }
// });

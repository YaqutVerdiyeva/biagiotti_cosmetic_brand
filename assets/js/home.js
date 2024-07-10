let openCreme = document.querySelector(".creme");
let closeCreme = document.querySelector(".close-creme");
let cremeModal = document.querySelector(".about-creme");
let openBalm = document.querySelector(".balm");
let closeBalm = document.querySelector(".close-balm");
let balmModal = document.querySelector(".about-balm");
let openSpray = document.querySelector(".spray");
let closeSpray = document.querySelector(".close-spray");
let sprayModal = document.querySelector(".about-spray");
let openTint = document.querySelector(".tint");
let closeTint = document.querySelector(".close-tint");
let tintModal = document.querySelector(".about-tint");
let openVideo = document.querySelector(".open-video-btn");
let closeVideo = document.querySelector(".close-video");
let videoModal = document.querySelector(".video");
let video = document.querySelector(".my-video");

openCreme.addEventListener("click", () => {
  cremeModal.style.height = "100vh";
});
closeCreme.addEventListener("click", () => {
  cremeModal.style.height = "0";
});
openBalm.addEventListener("click", () => {
  balmModal.style.height = "100vh";
});
closeBalm.addEventListener("click", () => {
  balmModal.style.height = "0";
});
openSpray.addEventListener("click", () => {
  sprayModal.style.height = "100vh";
});
closeSpray.addEventListener("click", () => {
  sprayModal.style.height = "0";
});
openTint.addEventListener("click", () => {
  tintModal.style.height = "100vh";
});
closeTint.addEventListener("click", () => {
  tintModal.style.height = "0";
});
openVideo.addEventListener("click", () => {
  videoModal.style.width = "100%";
});
closeVideo.addEventListener("click", () => {
  videoModal.style.width = "0";
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let star = document.querySelectorAll(".fa-star");

star.forEach((el) => {
  el.addEventListener("click", () => {
    el.style.color = "yellow";
    el.previousElementSibling.style.color = "yellow";
    // el.nextElementSibling.style.color = " #c4c4c4";
    el.previousElementSibling.previousElementSibling.style.color = "yellow";
    // el.nextElementSibling.nextElementSibling.style.color = " #c4c4c4";
    el.previousElementSibling.previousElementSibling.previousElementSibling.style.color =
      "yellow";
    // el.nextElementSibling.nextElementSibling.nextElementSibling.style.color =
    //   "#c4c4c4";
    el.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.color =
      "yellow";
    // el.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.color =
    //   "#c4c4c4d";
  });
});

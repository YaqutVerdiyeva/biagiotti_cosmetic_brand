let openMenu = document.querySelector(".open-menu");
let closeMenu = document.querySelector(".x-logo");
let sideBar = document.querySelector(".sidebar");
let sideBarContent = document.querySelector(".sidebar-content");
let responsiveOpenBtn = document.querySelector(".menu-logo");
let responsiveMenu = document.querySelector(".responsive-menu");
let responsiveContent = document.querySelector(".responsive-content");
let closeResponsiveMenu = document.querySelector(".close-responsive-menu");
let header = document.querySelector("header");
let responsiveNavbar = document.querySelector(".responsive-navbar");
let scrollUp = document.querySelector(".scroll-up-btn");

openMenu.addEventListener("click", () => {
  sideBar.style.width = "540px";
  sideBar.style.padding = " 0 60px";
  sideBarContent.style.display = "block";
});
closeMenu.addEventListener("click", () => {
  sideBar.style.width = "0px";
  sideBar.style.padding = " 0";
  sideBarContent.style.display = "none";
});
responsiveOpenBtn.addEventListener("click", () => {
  responsiveContent.style.display = "block";
  responsiveMenu.style.padding = "10px 40px";
  responsiveMenu.style.width = "100%";
});
closeResponsiveMenu.addEventListener("click", () => {
  responsiveContent.style.display = "none";
  responsiveMenu.style.padding = "0";
  responsiveMenu.style.width = "0%";
});

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.style.position = "fixed";
    responsiveNavbar.style.position = "fixed";
    header.style.backgroundColor = "#F4DBD7";
    scrollUp.style.display = "block";
  } else {
    header.style.position = "static";
    responsiveNavbar.style.position = "static";
    header.style.backgroundColor = " #fff";
    scrollUp.style.display = "none";
  }
}
window.addEventListener("scroll", function () {
  scrollFunction();
});
scrollUp.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

});

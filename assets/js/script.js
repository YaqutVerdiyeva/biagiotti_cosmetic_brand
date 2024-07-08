let openMenu = document.querySelector(".open-menu");
let closeMenu = document.querySelector(".x-logo");
let sideBar = document.querySelector(".sidebar");
let sideBarContent = document.querySelector(".sidebar-content");
let responsiveOpenBtn = document.querySelector(".menu-logo");
let responsiveMenu = document.querySelector(".responsive-menu");
let responsiveContent = document.querySelector(".responsive-content");
let closeResponsiveMenu = document.querySelector(".close-responsive-menu");
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

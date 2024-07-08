let openMenu = document.querySelector(".open-menu");
let closeMenu = document.querySelector(".x-logo");
let sideBar = document.querySelector(".sidebar");
let sideBarContent = document.querySelector(".sidebar-content");
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

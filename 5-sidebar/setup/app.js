const sideBar = document.querySelector(".sidebar");
const toggle = document.querySelector(".sidebar-toggle");
const exitBtn = document.querySelector(".close-btn");
toggle.addEventListener("click", () => {
  sideBar.classList.toggle("show-sidebar");
});
exitBtn.addEventListener("click", () => {
  sideBar.classList.toggle("show-sidebar");
});

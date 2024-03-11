const toggle = document.querySelector(".toggle");
const toggleX = document.querySelector(".toggle-x");
const sidebarList = document.querySelector(".sidebar-list");
toggle.addEventListener("click", () => {
  sidebarList.classList.remove("sidebar-hidden");
  console.log("salom");
});
toggleX.addEventListener("click", () => {
  sidebarList.classList.add("sidebar-hidden");
});

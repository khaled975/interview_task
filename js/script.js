const ul = document.querySelector("ul");
const li = document.querySelectorAll("ul li");
const tap_content = document.querySelectorAll(".tab_content");

const toggle_container = document.querySelectorAll(".toggle-container");
const toggle_btn = document.querySelectorAll(".toggle_btn");

const openBar = document.querySelector(".open");
const closeBar = document.querySelector(".close");
const nav = document.querySelector("nav");

// GET CONTENT
function handelNav(e) {
  const link = e.target.closest("li");
  if (!link) return;
  // REMOVE ACTIVE LINKS
  li.forEach((link) => link.classList.remove("active"));
  // ADD ACTIVE CLASS TO LINK
  link.classList.add("active");
  // REMOVE ACTIVE CONTENT
  tap_content.forEach((tab) => tab.classList.remove("tab_active"));
  //   ADD ACTIVE TAB CONTENT
  document
    .querySelector(`.tab_${link.dataset.tab}`)
    ?.classList.add("tab_active");
}

//  TOGGLE BTNS
function handelToggle(e) {
  console.log(e.target);
  e.target.closest(".toggle-container").classList.toggle("active");
}

// NAV
function handelResponsiveNav() {
  openBar.classList.toggle("hide");
  nav.classList.toggle("open");
}

openBar.addEventListener("click", handelResponsiveNav);
closeBar.addEventListener("click", handelResponsiveNav);

ul.addEventListener("click", handelNav);
toggle_btn.forEach((btn) => btn.addEventListener("click", handelToggle));

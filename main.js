"use strict";

// navbar버튼 클릭 -> 스크롤링
const navBtn = document.querySelector(".navbar__menu");
console.log(navBtn);
navBtn.addEventListener("click", (e) => {
  const target = document.querySelector(e.target.dataset.key);
  if (target === ".home") scrollTo(0, 0);
  else target.scrollIntoView({ behavior: "smooth" });
});

// contact 버튼 클릭하면 스크롤링

const contact = document.querySelector(".home__contact");
contact.addEventListener("click", () => {
  const footer = document.querySelector(".contact");
  footer.scrollIntoView({ behavior: "smooth" });
});

//scroll 내리면 navbar에 에니메이션 주기
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (scrollY > 200) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

// arrow-up
//클릭 -> 스크롤링
const home = document.querySelector(".home");
const arrowBtn = document.querySelector(".arrow");
arrowBtn.addEventListener("click", () => {
  home.scrollIntoView({ behavior: "smooth" });
});

//invisible
window.addEventListener("scroll", () => {
  if (scrollY > 500) arrowBtn.classList.add("visible");
  else arrowBtn.classList.remove("visible");
});

// home opacity주기
const homeContainer = document.querySelector(".home__container");
window.addEventListener("scroll", () => {
  homeContainer.style.opacity =
    1 - window.scrollY / home.getBoundingClientRect().height;
});

// toggle button click
const toggleBtn = document.querySelector(".toggle");
toggleBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
});

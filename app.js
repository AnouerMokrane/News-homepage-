let toggle = document.querySelector(".toggle");
let closeBtn = document.querySelector(".close-btn");
let nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

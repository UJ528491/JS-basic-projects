import peopleData from "./data.js";

const container = document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let slide;
const article = peopleData.map(
  data => `<article class="slide">
          <img src="${data.img}" alt="" class="img" />
          <h4>${data.name}</h4>
          <p class="title">${data.job}</p>
          <p class="text">${data.text}</p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>`
);

window.addEventListener("DOMContentLoaded", showContent);
let counter = 0;
nextBtn.addEventListener("click", () => {
  if (counter < slide.length - 1) {
    counter++;
    slideContent();
  } else if (counter >= slide.length - 1) {
    counter = 0;
    slideContent();
  }
});
prevBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    slideContent();
  } else if (counter <= 0) {
    counter = 2;
    slideContent();
  }
});

function slideContent() {
  slide.forEach(node => {
    node.style.transform = `translateX(-${counter * 100}%)`;
  });
}
function showContent() {
  container.innerHTML = article.join("");
  slide = container.querySelectorAll(".slide");
  slide.forEach((node, index) => {
    node.style.left = `${index * 100}%`;
  });
}

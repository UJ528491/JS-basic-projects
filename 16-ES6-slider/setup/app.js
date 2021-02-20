import peopleData from "./data.js";

const container = document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

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
let count = 0;
window.addEventListener("DOMContentLoaded", showContent);

nextBtn.addEventListener("click", () => {
  count++;
  showContent();
});
prevBtn.addEventListener("click", () => {
  count--;
  showContent();
});

function showContent() {
  container.innerHTML = article[count];
}

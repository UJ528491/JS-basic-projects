import peopleData from "./data.js";

const container = document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

container.innerHTML = peopleData
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === peopleData.length - 1) {
      position = "last";
    }
    return `<article class="slide ${position}">
          <img src="${img}" alt="${name}" class="img" />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">${text}</p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>`;
  })
  .join("");

const startSlider = type => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  // end to first node
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }

  active.classList.add(["last"]);
  last.classList.add(["next"]);
  next.classList.add(["active"]);
};

nextBtn.addEventListener("click", () => {
  startSlider();
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
/* let slide;
console.log([...peopleData, ...peopleData]);
const article = peopleData.map(
  data => {
    return `<article class="slide">
          <img src="${data.img}" alt="" class="img" />
          <h4>${data.name}</h4>
          <p class="title">${data.job}</p>
          <p class="text">${data.text}</p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>`}
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
} */

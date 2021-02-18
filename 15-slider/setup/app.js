const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
prevBtn.style.display = "none";

let counter = 0;

function displayBtn() {
  if (counter === 0) {
    prevBtn.style.display = "none";
  } else if (counter === slides.length - 1) {
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  }
}
function carousel() {
  // working with slides
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  // working with buttons
  displayBtn();

  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});
nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});

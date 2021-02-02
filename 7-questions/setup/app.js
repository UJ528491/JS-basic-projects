//using selectors inside the element
// traversing the dom

const question = document.querySelectorAll(".question");

question.forEach(q => {
  const btn = q.querySelector(".question-btn");
  const text = q.querySelector(".question-text");
  const plusBtn = q.querySelector(".plus-btn");
  const minusBtn = q.querySelector(".minus-btn");
  btn.addEventListener("click", () => {
    console.log(btn);
    text.classList.toggle("show-text");
    plusBtn.classList.toggle("show-text");
    minusBtn.classList.toggle("show-text");
  });
});

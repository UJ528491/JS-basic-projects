const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn");
const main = document.querySelector("main");
const color = document.querySelector(".color");
btn.addEventListener("click", handleBtn);

function handleBtn() {
  const ranNum = Math.floor(Math.random() * colors.length);
  const ranColor = colors[ranNum];

  main.style.backgroundColor = ranColor;
  color.innerHTML = ranColor;
}

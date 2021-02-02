const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const main = document.querySelector("main");
const color = document.querySelector(".color");
btn.addEventListener("click", handleBtn);

function handleBtn() {
  let ranHex = "#";
  for (let i = 0; i < 6; i++) {
    const ranNum = Math.floor(Math.random() * hex.length);
    ranHex += hex[ranNum];
  }
  main.style.backgroundColor = ranHex;
  color.innerHTML = ranHex;
}

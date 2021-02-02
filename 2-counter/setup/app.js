const btnNode = document.querySelectorAll(".btn");
const value = document.getElementById("value");
let count = 0;
btnNode.forEach(btn => {
  btn.addEventListener("click", event => {
    const btnClass = event.target.classList;
    console.log(btnClass.contains("btn-dec"));
    if (btnClass.contains("btn-dec")) {
      count--;
    } else if (btnClass.contains("btn-inc")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#000";
    }
  });
});

/* const btnDec = document.querySelector(".btn-dec");
const btnReset = document.querySelector(".btn-reset");
const btnInc = document.querySelector(".btn-inc");
const display = document.getElementById("value");
let count = 0;
btnDec.addEventListener("click", handleBtnDec);
btnReset.addEventListener("click", handleBtnReset);
btnInc.addEventListener("click", handleBtnInc);

function handleBtnDec(e) {
  console.log(e.currentTarget);
  count--;
}
function handleBtnInc() {
  count++;
}
function handleBtnReset() {
  count = 0;
}
function displayCount() {
  display.textContent = count;
}
if (count < 0) {
  console.log("if문 작동");
  display.style.color = "red";
} else if (count == 0) {
  display.style.color = "black";
} else {
  display.style.color = "green";
}
console.log("밑에 작동");
displayCount();
 */

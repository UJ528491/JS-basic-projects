// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const btn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const modalExit = document.querySelector(".close-btn");
btn.addEventListener("click", () => {
  modalOverlay.classList.toggle("open-modal");
});
modalExit.addEventListener("click", () => {
  modalOverlay.classList.toggle("open-modal");
});

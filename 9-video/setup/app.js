// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const preloader = document.querySelector(".preloader");
const video = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switch-btn");
window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
switchBtn.addEventListener("click", () => {
  if (switchBtn.classList.contains("slide")) {
    switchBtn.classList.toggle("slide");
    video.play();
  } else {
    switchBtn.classList.toggle("slide");
    video.pause();
  }
});

const tabBtn = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
let id = "";
tabBtn.forEach(btn => {
  btn.addEventListener("click", e => {
    id = e.target.textContent;
    tabBtn.forEach(btn => {
      btn.classList.remove("active");
    });
    contents.forEach(content => {
      content.classList.remove("active");
    });
    e.target.classList.add("active");
    const element = document.querySelector(`.content-${id}`);
    // console.log(element.classList);
    element.classList.add("active");
  });
});

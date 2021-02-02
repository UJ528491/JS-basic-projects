// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const imgNode = document.querySelector(".img-container");
const authorNode = document.querySelector("#author");
const jobNode = document.querySelector("#job");
const infoNode = document.querySelector("#info");
const btnIcon = document.querySelectorAll("i");
const ranBtnNode = document.querySelector(".random-btn");
let listNum = 0;
btnIcon.forEach(btn => {
  btn.addEventListener("click", e => {
    const btnClass = e.target.classList;
    removeImg();
    if (btnClass.contains("fa-chevron-left")) {
      listNum--;
      if (listNum < 0) {
        listNum = reviews.length - 1;
      }
      loadData(listNum);
    } else if (btnClass.contains("fa-chevron-right")) {
      listNum++;
      if (listNum > reviews.length - 1) {
        listNum = 0;
      }
      loadData(listNum);
    }
  });
});
ranBtnNode.addEventListener("click", () => {
  ranNumGenerator(listNum);
  removeImg();
  loadData(listNum);
});
function ranNumGenerator(currentNum) {
  const ranNum = Math.floor(Math.random() * reviews.length);
  if (ranNum == currentNum) {
    ranNumGenerator(currentNum);
  } else {
    listNum = ranNum;
  }
}
function removeImg() {
  imgNode.removeChild(imgNode.firstChild);
}
function loadData(listNum = 0) {
  const image = new Image();
  image.id = "person-img";
  image.src = reviews[listNum].img;
  imgNode.appendChild(image);
  authorNode.textContent = reviews[listNum].name;
  jobNode.textContent = reviews[listNum].job;
  infoNode.textContent = reviews[listNum].text;
}
loadData();

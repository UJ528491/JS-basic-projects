const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const sec = date.getSeconds();
  const endDate = {
    year: 2021,
    month: 2,
    day: 25,
    hours: 11,
    minutes: 30,
    sec: 0,
  };
  const tempYear = endDate.year - year;
  const tempMonth = tempYear * 12 + endDate.month - month;
  const tempDay = tempMonth * 30 + endDate.day - day;
  const tempHours = tempDay * 24 + endDate.hours - hours;
  const tempMinutes = tempHours * 60 + endDate.minutes - minutes;
  const tempSec = tempMinutes * 60 + endDate.sec - sec;

  const deadline = document.querySelectorAll(".deadline-format h4");
  const d_sec = tempSec % 60;
  const d_min = Math.floor((tempSec / 60) % 60);
  const d_hour = Math.floor((tempSec / 60 / 60) % 24);
  const d_day = Math.floor((tempSec / 60 / 60 / 24) % 12);

  const value = [d_day, d_hour, d_min, d_sec];
  deadline.forEach((h4, index) => {
    h4.innerHTML = `${zeroFormat(value[index])}`;
  });
}
function zeroFormat(number) {
  if (number < 10) {
    return `0${number}`;
  } else {
    return number;
  }
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

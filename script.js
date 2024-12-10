const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const circleEl = document.querySelector(".circle");
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.toggle("dark")) {
    e.target.innerText = "Light Mode";
  } else {
    e.target.innerText = "Dark Mode";
  }
});

const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  hourEl.style.transform = `translate(-50%, -100%) rotate(${
    30 * hoursForClock
  }deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${6 * minutes}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${6 * seconds}deg)`;
  timeEl.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
  dateEl.innerText = `${days[day]},${months[month]} `;
  circleEl.innerText = `${date}`;
};

setTime();

setInterval(setTime, 1000);

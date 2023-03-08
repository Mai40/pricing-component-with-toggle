/* let toggle = document.querySelector("#toggle");
console.log(toggle); */
// let switchToggle = document.querySelector(".switch");
// console.log(switchToggle);
/* let ball = document.querySelector(".ball");
console.log(ball);
let pricingToggle = document.querySelector(".pricing-toggle");
console.log(pricingToggle);
let container = document.querySelector(".container");
console.log(container);

toggle.addEventListener("click", function () {
  if (container.classList.contains("monthy")) {
    container.classList.remove("monthly");
    container.classList.add("annual");
    ball.classList.add("move-left");
  } else {
    container.classList.remove("annual");
    ball.classlist.remove("move-left");
    container.classList.add("monthy");
  }
}); */

/* toggle.addEventListener("click", function () {
  if (container.classList.contains("monthy")) {
    container.clasList.remove("monthy");
    ball.classList.add("move-left");
  } else {
    container.classList.remove("annual");
    container.classList.add("monthy");
    ball.classlist.remove("move-left");
  }
}); */

let toggle = document.querySelector("#toggle");
console.log(toggle);
let monthly = document.querySelectorAll(".monthly");
let annual = document.querySelectorAll(".annual");

toggle.addEventListener("click", function () {
  if (toggle.checked) {
    annual.forEach(price-option => price-option.style.display = "none");
    monthly.forEach(price-option => price-option.style.display = "none");
    // console.log("checked");
  } else {
    // console.log("unchecked");
  }
});

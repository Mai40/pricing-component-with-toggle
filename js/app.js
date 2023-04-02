let toggle = document.querySelector("#toggle");
console.log(toggle);
let monthly = document.querySelectorAll(".monthly");
let annual = document.querySelectorAll(".annual");

toggle.addEventListener("click", function () {
  if (toggle.checked) {
    annual.forEach((priceOption) => (priceOption.style.display = "flex"));
    monthly.forEach((priceOption) => (priceOption.style.display = "none"));
    // console.log("checked");
  } else {
    // console.log("unchecked");
    annual.forEach((priceOption) => (priceOption.style.display = "none "));
    monthly.forEach((priceOption) => (priceOption.style.display = "block"));
  }
});

const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2022,
  color: "white",
  milage: 10000,
  isElectric: true,
  on: false,
  features: ["Autopilot", "Full self-driving", "Premium interior"],
  startEngine: function () {
    console.log("Engine started");
  },
  stopEngine: function () {
    console.log("Engine stopped");
  },
};
console.log(car);

//Function

var heading = document.querySelector("h1");
var buttonSmaller = document.querySelector(".smaller");
var buttonColors = document.querySelector("#colors");
var body = document.querySelector("body");

function changeHeading() {
  heading.innerHTML = "Your New Brand";
}
buttonSmaller.onclick = changeHeading;

function changeColors() {
  body.style.backgroundColor = "white";
}
buttonColors.onclick = changeColors;

//Statment practising

var getCar = "Tesla";
var year = 2023;
var isElectric = true;

if (getCar === "Tesla" && year >= 2022 && isElectric === true) {
  console.log("Car is accepted");
} else {
  if (getCar !== "Tesla") {
    console.log("Car must be a Tesla.");
  }
  if (year < 2020) {
    console.log("The car must to from year 2022 or more.");
  }
  if (isElectric !== true) {
    console.log("The car must be electric");
  }
}

//Arrays practising

var product1 = {
  id: 1,
  name: "Tesla Model 1",
  price: 500.0,
};

var product2 = {
  id: 2,
  name: "Tesla Model 2",
  price: 650.0,
};

var product3 = {
  id: 3,
  name: "Tesla Model 3",
  price: 700.0,
};

var products = [product1, product2, product3];
console.log(products);

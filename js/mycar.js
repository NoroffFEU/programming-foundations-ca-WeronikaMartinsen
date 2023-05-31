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

//Function

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

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
var heading3 = document.querySelector("h3");
var buttonSmaller = document.querySelector(".smaller");
var buttonColors = document.querySelector("#colors");
var body = document.querySelector("body");
var paragraph = document.querySelector("p");

function changeHeading() {
  heading.innerHTML = "Model 3";
}
buttonSmaller.onclick = changeHeading;

function changeColors() {
  body.style.backgroundColor = "#9f5353";
  paragraph.style.color = "white";
}
buttonColors.onclick = changeColors;

//Statement practising

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

// Function (button sound)

var sound = new Audio();
sound.src = "audio/electric-car-107096.mp3";

// Practising

var products = [product1, product2, product3];
var product1 = products[0];
var product3 = products[2];

console.log(product3);

//Add a new item to this array using the push method and console log the new amount of items.

var products = [product1, product2, product3];

products.push("product4");
console.log(products.length);

products.push("product5");
console.log(products.length);

var newProduct = "product0";
products.unshift(newProduct);

console.log(products.length);

for (var i = 0; i < products.length; i++) {
  var col = products[i];
  console.log(col);
}

/////////////////////////////////////Changes images - statement/////////////////

var sliderImage = document.querySelector(".slider-image");
var images = ["tesla-2.jpg", "tesla-5.jpg", "tesla-6.jpg"];
var i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}
function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}
function setImg() {
  return sliderImage.setAttribute("src", "images/" + images[i]);
}
//////////////////////////////

let data = [
  {
    name: "Tesla 1",
    year: 2023,
    price: "650.000 NOK",
  },
  {
    name: "Tesla 2",
    year: 2022,
    price: "650.000 NOK",
  },
  {
    name: "Tesla 3",
    year: 2021,
    price: "650.000 NOK",
  },
  {
    name: "Tesla 4",
    year: 2020,
    price: "650.000 NOK",
  },
  {
    name: "Tesla 5",
    year: 2017,
    price: "650.000 NOK",
  },
  {
    name: "Tesla 6",
    year: 2019,
    price: "650.000 NOK",
  },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return (
    "<div>" +
    item.name +
    "<br>" +
    "Year:" +
    " " +
    item.year +
    "<br>" +
    "Price:" +
    "  " +
    item.price +
    " " +
    "</div>"
  );
});

info.innerHTML = details.join("\n");

function addElement() {
  const newDiv = document.createElement("div");

  const newContent = document.createTextNode("Hi there");

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
//////////////////////////

var answer = 2008;

function whatYearTesla() {
  var searchInput = document.getElementById("searchInput").value;

  if (searchInput == answer) {
    document.getElementById("resultTeslaYear").innerHTML =
      "That`s correct! You just won a free Tesla gadget!";
  } else if (searchInput > 2005 && searchInput < 2008) {
    document.getElementById("resultTeslaYear").innerHTML =
      "You were so close! Try again!";
  } else if (searchInput > 2008 && searchInput <= 2011) {
    document.getElementById("resultTeslaYear").innerHTML =
      "You were so closed! Try again!";
  } else {
    document.getElementById("resultTeslaYear").innerHTML =
      "Sorry, you are wrong. Maybe next time?";
  }
}

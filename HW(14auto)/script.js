console.log("Hello World");
console.log(document.querySelector("h1").textContent);
var img = document.getElementById("img1");
console.log(img);
console.log(" Width - " + img.naturalWidth, "Height - " + img.naturalHeight);
console.log();
console.log("All h2 elemets text");
console.log(
  document
    .querySelectorAll("h2")
    .forEach((element) => console.log(element.textContent))
);
var price = document.querySelectorAll(".price p");
var tariff = document.querySelectorAll(".price h3");
console.log(price);
console.log(tariff);
for (let index = 0; index < price.length; index++) {
  console.log(tariff[index].textContent, "Price - " + price[index].textContent);
}
console.log("Text count -" + document.querySelectorAll(".text").length);
var button = document.getElementById("button");
console.log(button.getAttribute("value"));

function onSubmit(event) {
  console.log("sumited");
  event.preventDefault();
  button.setAttribute("value", "Go");
}

var form = document.forms[0];
form.addEventListener("submit", onSubmit);

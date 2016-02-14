
var fName = document.querySelector("#firstname");
var lName = document.querySelector("#lastname");
var email = document.querySelector("#email");
var country = document.querySelector("#country");
var biography = document.querySelector("#biography");

var phoneNumber = document.querySelector("#phoneNumber");
var affiliations = document.querySelector("#affiliations");
var occupation = document.querySelector("#occupation");
var catName = document.querySelector("#catName");
var gadget = document.querySelector("#gadget");

var talent = document.querySelector("#talent");
var drink = document.querySelector("#drink");
var power = document.querySelector("#power");
var weapon = document.querySelector("#weapon");
var comments = document.querySelector("#comments");


var button = document.querySelector("button");


button.addEventListener("click", function() {
console.log(fName.value);
fName.value = "";
console.log(lName.value);
lName.value = "";
console.log(email.value);
email.value = "";
console.log(country.value);
country.value = "";
console.log(biography.value);
biography.value = "";

console.log(phoneNumber.value);
phoneNumber.value = "";
console.log(affiliations.value);
affiliations.value = "";
console.log(occupation.value);
occupation.value = "";
console.log(catName.value);
catName.value = "";
console.log(gadget.value);
gadget.value = "";

console.log(talent.value);
talent.value = "";
console.log(drink.value);
drink.value = "";
console.log(power.value);
power.value = "";
console.log(weapon.value);
weapon.value = "";
console.log(comments.value);
comments.value = "";

});

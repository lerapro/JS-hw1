// -----------age------------

let age = 15;
console.log(age);

// -----------name------------

let name = "Valeria";
console.log(name);

// -----------student------------

let isStudent = true;
console.log(isStudent);

// -----------quote------------

let myString = "«Success is not the key to happiness. Happiness is the key to success.» (Herman Cain)";
console.log(myString);

// -----------number------------

let myNumber = 5;
myNumber+=10;
console.log(myNumber);

// -----------null------------

let myNull = null;
console.log(myNull);

// -----------prompt------------

let userName = prompt("Hi! What is your name?");
alert ("Hi," + userName);

// -----------confirm------------


// let confirmation = confirm("Do you confirm the action?");

// var message = confirmation ? "Thanks for the confirmation!" : "Action cancelled!";
// alert(message);

// or

let confirmation = confirm("Do you confirm the action?");

if (confirmation) {
  alert("Thanks for the confirmation!");
} else {
  alert("Action cancelled!");
}

// -----------confirm------------

alert ("Dangerous action");

let answer = confirm ("Please, confirm the action");

if (confirmation) {
    alert("Thanks for the confirmation!");
  } else {
    alert("Action cancelled!");
  }

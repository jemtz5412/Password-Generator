var lowChar= "abcdefghijklmnopqrstuvwxyz";
var lowCharArr= lowChar.split("");
var capChar= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var capCharArr= capChar.split("");
var numChar= "0123456789";
var numCharArr= numChar.split("");
var speChar= "!@#$%^&*()-_=+[\\]{|}`~;:',<.>/?";
var speCharArr= speChar.split("");

// calls to generate password
function generatePass() {
  var allChars = [];
  var resultPass = "";

var passLenCK = prompt("Your password should be between 8 to 256 characters");

// the amount of characters the user chooses for their password
if (passLenCK < 8 || passLenCK > 256) {
  alert("Input numerical value that falls in between 8 and 256");
}

// follows the commands of user based on decision made
else {
  if (confirm("Would you like your password to be in lowercase?")) {
    Array.prototype.push.apply(allChars, lowCharArr);
  }
  if (confirm("Would you like your password to be in uppercase?")) {
    Array.prototype.push.apply(allChars, capCharArr);
  }
  if (confirm("Would you like your password to have numbers?")) {
    Array.prototype.push.apply(allChars, numCharArr);
  }
  if (confirm("Would you like your password to have special characters?")) {
    Array.prototype.push.apply(allChars, speCharArr);
  }
  if (allChars.length === 0) {
    alert("You must input at least 8 characters to generate your password!");
  }

  // loop formed to generate random password
  else {
    for (var i = 0; i < passLenCK; i++) {
      var random = Math.floor(Math.random() * allChars.length);
      resultPass += allChars [random];
    }
   }
}

document.getElementById("password").innerHTML = resultPass;
}

// code to make clipboard
function copyPass() {
  document.querySelector("textarea").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}





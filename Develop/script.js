// Assignment Code
var character;
var alphabetLower;
var alphabetUpper;
var number;
var symbol;
var promptAnswer;
var lowerCase = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var toUpper = function (abc) {
  return abc.toUpperCase();};
upperCase = lowerCase.map(toUpper);
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["~","!","@","#","$","%","^","&","*","(",")","_","+","=","-","<",">"];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  character = prompt("How many characters would you like your password? Choose between 8 and 128");
  
    if(!character) {
    alert("Nothing entered");
  } else if (character < 8 || character > 128) {
    character = prompt("You must choose between 8 and 128");  
  } else { 
    alphabetLower = confirm("Will this contain lower case letters?");
    alphabetUpper = confirm("Will this contain upper case letters?");
    number = confirm("Will this contain numbers?");
    symbol = confirm("Will this contain symbol characters?");
  };

  if (!alphabetLower && !alphabetUpper && !number && !symbol) {
    promptAnswer = alert("Select at least one requirement for password");
  } else if (alphabetLower && alphabetUpper && number && symbol) {
    promptAnswer = lowerCase.concat(upperCase, numbers, symbols);
  }
  else if (alphabetLower && alphabetUpper && number) {
    promptAnswer = lowerCase.concat(upperCase, numbers);
  }
  else if (alphabetLower && alphabetUpper && symbol) {
    promptAnswer = lowerCase.concat(upperCase, symbols);
  }
  else if (alphabetLower && number && symbol) {
    promptAnswer = lowerCase.concat(numbers, symbols);
  }
  else if (alphabetUpper && number && symbol) {
    promptAnswer = upperCase.concat(numbers, symbols);
  }
  else if (alphabetLower && alphabetUpper) {
    promptAnswer = lowerCase.concat(upperCase);
  }
  else if (alphabetLower && number) {
    promptAnswer = lowerCase.concat(numbers);
  }
  else if (alphabetLower && symbol) {
    promptAnswer = lowerCase.concat(symbols);
  }
  else if (alphabetUpper && number) {
    promptAnswer = upperCase.concat(numbers);
  }
  else if (alphabetUpper && symbol) {
    promptAnswer = upperCase.concat(symbols);
  }
  else if (number && symbol) {
    promptAnswer = numbers.concat(symbols);
  }
  else if (alphabetLower) {
    promptAnswer = lowerCase;
  }
  else if (alphabetUpper) {
    promptAnswer = blankUpper.concat(upperCase);
  }
  else if (number) {
    promptAnswer = numbers;
  }
  else if (symbol) {
    promptAnswer = symbols;
  };
  var passwordBlank = [];
  for (var i = 0; i < character; i++) {
    var answers = promptAnswer[Math.ceil(Math.random() * promptAnswer.length)];
    passwordBlank.push(answers);
    console.log(answers);
  }

  var password = passwordBlank.join("");
  return password;
  
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
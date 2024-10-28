// ------------------------------------------------------------START------------------------------------------------------------

// Chapter 21 To 25

// Question 1

// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome!");

// Question 2

// var favoritePhone = prompt("Enter your favorite mobile phone model:");
// var lengthOfInput = favoritePhone.length;
// console.log("The length of your input is: " + lengthOfInput);

// Question 3

// var word = "Pakistani";
// var indexOfN = word.indexOf("n");
// console.log("The index of 'n' in the word 'Pakistani' is: " + indexOfN);

// Question 4

// var phrase = "Hello World";
// var lastIndexOfL = phrase.lastIndexOf("l");
// console.log("The last index of 'l' in the phrase 'Hello World' is: " + lastIndexOfL);

// Question 5

// var word = "Pakistani";
// var charAtThirdIndex = word.charAt(3);
// console.log("The character at the 3rd index in the word 'Pakistani' is: " + charAtThirdIndex);

// Question 6

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);
// console.log("Hello, " + fullName + "!");

// Question 7

// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// console.log("The new word is: " + newCity);

// Question 8

// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";
// var updatedMessage = message.replace(/and/g, "&");
// console.log(updatedMessage);

// Question 9

// var strValue = "472";
// var numValue = Number(strValue);
// console.log(
//   "Value as string: " + strValue + " (Type: " + typeof strValue + ")"
// );
// console.log(
//   "Value as number: " + numValue + " (Type: " + typeof numValue + ")"
// );

// Question 10

// var userInput = prompt("Enter some text:");
// var upperCaseInput = userInput.toUpperCase();
// console.log("Your input in capital letters is: " + upperCaseInput);

// Question 11

// var userInput = prompt("Enter some text:");
// var titleCaseInput = "";
// var capitalizeNext = true;
// for (var i = 0; i < userInput.length; i++) {
//   var char = userInput[i];
//   if (char === " ") {
//     titleCaseInput += char;
//     capitalizeNext = true;
//   } else {
//     if (capitalizeNext) {
//       titleCaseInput += char.toUpperCase();
//       capitalizeNext = false; // Reset the flag
//     } else {
//       titleCaseInput += char.toLowerCase();
//     }
//   }
// }
// console.log("Your input in title case is: " + titleCaseInput);

// Question 12

// var num = 35.36;
// var numString = num.toString().replace('.', '');
// console.log(numString);

// Question 13

// var username = prompt("Enter a username:");
// var isValid = true;

// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         isValid = false;
//         break;
//     }
// }

// if (!isValid) {
//     alert("Invalid username! Please avoid using special symbols like @ , . !");
// } else {
//     alert("Username accepted: " + username);
// }

// Question 14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:").toLowerCase();

// var itemFound = A.some(item => item.toLowerCase() === userInput);

// if (itemFound) {
//     alert(userInput + " is available in the list.");
// } else {
//     alert(userInput + " is not available in the list.");
// }

// Question 15

// var password = prompt("Enter your password:");
// var isValid = false;

// if (password.length >= 6) {
//     if (!(password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57)) {
//         var hasAlphabet = false;
//         var hasNumber = false;
//         for (var i = 0; i < password.length; i++) {
//             var charCode = password.charCodeAt(i);
//             if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//                 hasAlphabet = true;
//             }
//             else if (charCode >= 48 && charCode <= 57) {
//                 hasNumber = true;
//             }

//             if (hasAlphabet && hasNumber) {
//                 isValid = true;
//                 break;
//             }
//         }
//     }
// }

// if (isValid) {
//     alert("Password is valid.");
// } else {
//     alert("Invalid password! \nPassword must:\n- Be at least 6 characters long\n- Start with an alphabet\n- Contain both letters and numbers.");
// }

// Question 16

// var university = "University of Karachi";
// var universityArray = university.split("");

// for (var i = 0; i < universityArray.length; i++) {
//     console.log(universityArray[i]);
// }

// Question 17

// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput.charAt(userInput.length - 1);

// alert("The last character is: " + lastCharacter);

// Question 18

// var text = "The quick brown fox jumps over the lazy dog";
// var lowerCaseText = text.toLowerCase();
// var words = lowerCaseText.split(" ");
// var count = 0;

// for (var i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// console.log("The word 'the' occurs " + count + " times.");

// Chapter 26 To 30

// Question 1

// var userInput = prompt("Enter a positive integer:");
// var number = parseFloat(userInput);

// if (number >= 0 && Number.isFinite(number)) {
//     console.log("Number: " + number);
//     console.log("Round Off Value: " + Math.round(number));
//     console.log("Floor Value: " + Math.floor(number));
//     console.log("Ceil Value: " + Math.ceil(number));
// } else {
//     console.log("Please enter a valid positive integer.");
// }

// Question 2

// var userInput = prompt("Enter a negative floating point number:");
// var number = parseFloat(userInput);

// if (number < 0 && Number.isFinite(number)) {
//   console.log("<h2>Number: " + number + "</h2>");
//   console.log("<h2>Round Off Value: " + Math.round(number) + "</h2>");
//   console.log("<h2>Floor Value: " + Math.floor(number) + "</h2>");
//   console.log("<h2>Ceil Value: " + Math.ceil(number) + "</h2>");
// } else {
//   console.log(
//     "<h2>Please enter a valid negative floating point number.</h2>"
//   );
// }

// Question 3

// var userInput = prompt("Enter a number:");
// var number = parseFloat(userInput); 

// var absoluteValue = Math.abs(number);

// console.log("<h2>Absolute value of " + number + " is " + absoluteValue + ".</h2>");

// Question 4

// var diceValue = Math.floor(Math.random() * 6) + 1;
// console.log("Dice rolled: " + diceValue);

// Question 5

// var tossValue = Math.random();
//         var coinResult = tossValue < 0.5 ? "Heads" : "Tails"; 
//         console.log("Coin tossed: " + coinResult);

// Question 6

// var randomNumber = Math.floor(Math.random() * 100) + 1;
//         console.log("Random number between 1 and 100: " + randomNumber);

// Question 7

// var userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
        
//         var weightMatch = userInput.match(/(\d*\.?\d+)\s*(kgs?|kilograms)?/i);

//         if (weightMatch) {
//             var weight = parseFloat(weightMatch[1]);

//             console.log("<h2>Your weight is: " + weight + " kg</h2>");
//         } else {
//             console.log("<h2>Please enter a valid weight.</h2>");
//         }

// Question 8

// var secretNumber = Math.floor(Math.random() * 10) + 1;

//         var userInput = prompt("Guess the secret number between 1 and 10:");

//         var userGuess = parseInt(userInput);

//         if (userGuess === secretNumber) {
//             alert("Congratulations! You guessed the secret number: " + secretNumber);
//         } else {
//             alert("Sorry, the secret number was: " + secretNumber);
//         }


// Chapter 31 To 34

// Question 1
// Question 2
// Question 3
// Question 4
// Question 5
// Question 6
// Question 7
// Question 8
// Question 9
// Question 10
// Question 11
// Question 12
// Question 13
// Question 14

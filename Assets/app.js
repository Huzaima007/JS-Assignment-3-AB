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

// var now = new Date();
// console.log("Current Date: " + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate());
// console.log("Current Time: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());

// Question 2

// var now = new Date();
// var monthNames = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// var currentMonth = monthNames[now.getMonth()];
// alert("Current Month: " + currentMonth);

// Question 3

// var now = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = dayNames[now.getDay()];
// alert("Current Day: " + currentDay);

// Question 4

// var now = new Date();
// var day = now.getDay(); 

// if (day === 0 || day === 6) {
//   alert("It’s Fun day");
// } else {
//   alert("It’s a regular day");
// }

// Question 5

// var now = new Date();
// var date = now.getDate();

// if (date < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }

// Question 6

// var currentDate = new Date();
// var minutesSince1970 = Math.floor(currentDate.getTime() / (1000 * 60));
// console.log("Minutes since Jan. 1, 1970:", minutesSince1970);

// Question 7

// var now = new Date();
// var hours = now.getHours();

// if (hours < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

// Question 8

// var laterDate = new Date(2020, 11, 31); 
// console.log("Later Date:", laterDate);

// Question 9

// var ramadanStartDate = new Date(2015, 5, 18);
// var currentDate = new Date();
// var differenceInMilliseconds = currentDate - ramadanStartDate;
// var daysPassed = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
// alert("Days since 1st Ramadan: " + daysPassed);

// Question 10

// var referenceDate = new Date(2015, 5, 18); 
// var startOf2015 = new Date(2015, 0, 1); 
// var differenceInMilliseconds = referenceDate - startOf2015;
// var secondsElapsed = Math.floor(differenceInMilliseconds / 1000);
// console.log("Seconds elapsed between the beginning of 2015 and June 18, 2015: " + secondsElapsed);

// Question 11

// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// console.log("Current Hours:", currentHours);
// currentDate.setHours(currentHours + 1);
// console.log("Updated Date and Time (1 hour ahead):", currentDate);

// Question 12

// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years back: " + currentDate.toDateString());

// Question 13

// var age = prompt("Please enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// console.log("Your birth year is: " + birthYear);

// Question 14

// var customerName = prompt("Enter your name:");
// var currentMonth = prompt("Enter the current month:");
// var numberOfUnits = parseFloat(prompt("Enter the number of units consumed:"));
// var chargesPerUnit = parseFloat(prompt("Enter the charges per unit:"));
// var latePaymentSurcharge = parseFloat(prompt("Enter the late payment surcharge:"));
// var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
// var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
// console.log("K-Electric Bill");
// console.log("Customer Name: " + customerName);
// console.log("Current Month: " + currentMonth);
// console.log("Number of Units: " + numberOfUnits);
// console.log("Charges per Unit: " + chargesPerUnit.toFixed(2));
// console.log("Net Amount Payable (within Due Date): " + netAmountPayable);
// console.log("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2));
// console.log("Gross Amount Payable (after Due Date): " + grossAmountPayable);


// Chapter 35 To 38

// Question 1

// function displayCurrentDateTime() {
//     var now = new Date();
//     var date = now.toDateString(); 
//     var time = now.toTimeString(); 
    
//     console.log("Current Date: " + date);
//     console.log("Current Time: " + time);
//   }
//   displayCurrentDateTime();
  
// Question 2

// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName; 
//     console.log("Hello, " + fullName + "! Welcome!");
//   }
  
//   greetUser("John", "Doe");
  
// Question 3

// function addTwoNumbers() {
//     var firstNumber = parseFloat(prompt("Enter the first number:"));
//     var secondNumber = parseFloat(prompt("Enter the second number:"));
  
//     var sum = firstNumber + secondNumber;
  
//     return sum;
//   }
  
//   var result = addTwoNumbers();
//   console.log("The sum of the two numbers is: " + result);
  
// Question 4

// function calculator(num1, num2, operator) {
//     var result;
  
  
//     if (operator === '+') {
//       result = num1 + num2;
//     } else if (operator === '-') {
//       result = num1 - num2;
//     } else if (operator === '*' || operator === 'x') {
//       result = num1 * num2;
//     } else if (operator === '/') {
//       if (num2 !== 0) {
//         result = num1 / num2;
//       } else {
//         return "Error: Division by zero is not allowed.";
//       }
//     } else {
//       return "Error: Invalid operator. Please use +, -, *, or /.";
//     }
  
    
//     console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);
//     return result; 
//   }
  
//   calculator(10, 5, '+'); 
//   calculator(10, 5, '-');
//   calculator(10, 5, '*'); 
//   calculator(10, 5, '/'); 
//   calculator(10, 0, '/');
//   calculator(10, 5, 'x'); 
//   calculator(10, 5, '%');
  
// Question 5

// function square(num) {
//     return num * num;
//   }
//   var result = square(5);
//   console.log("The square of 5 is: " + result);
  
// Question 6

// function factorial(n) {
//     if (n < 0) {
//       return "Error: Factorial is not defined for negative numbers.";
//     }
    
//     if (n === 0) {
//       return 1;
//     }
    
//     return n * factorial(n - 1);
//   }
  
//   var number = 5; 
//   var result = factorial(number);
//   console.log(`The factorial of ${number} is: ${result}`);
  
// Question 7

// function displayCounting(start, end) {
//     if (start > end) {
//       console.log("Error: Start number should be less than or equal to end number.");
//       return;
//     }
  
//     for (var i = start; i <= end; i++) {
//       console.log(i);
//     }
//   }
  
//   var startNumber = 1;
//   var endNumber = 10; 
//   displayCounting(startNumber, endNumber);
  
// Question 8

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(x) {
//       return x * x;
//     }
  
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
  
//     var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
    
//     return hypotenuse;
//   }
  
//   var base = 3;        
//   var perpendicular = 4;
//   var result = calculateHypotenuse(base, perpendicular);
//   console.log(`The hypotenuse of the triangle is: ${result}`);
  
// Question 9

// function calculateRectangleArea(width, height) {
//     return width * height; 
//   }
  
//   var area1 = calculateRectangleArea(5, 10); 
//   console.log(`Area of rectangle (using values): ${area1}`);
  
//   var rectWidth = 8;   
//   var rectHeight = 12; 
//   var area2 = calculateRectangleArea(rectWidth, rectHeight);
//   console.log(`Area of rectangle (using variables): ${area2}`);
  
// Question 10

// function isPalindrome(str) {
//     var normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     var reversedStr = normalizedStr.split('').reverse().join('');
  
//     return normalizedStr === reversedStr;
//   }
  
//   var testString1 = "madam";
//   var testString2 = "hello";
//   var testString3 = "A man, a plan, a canal: Panama";
  
//   console.log(`Is "${testString1}" a palindrome? ${isPalindrome(testString1)}`); 
//   console.log(`Is "${testString2}" a palindrome? ${isPalindrome(testString2)}`); 
//   console.log(`Is "${testString3}" a palindrome? ${isPalindrome(testString3)}`);
  
// Question 11

// function capitalizeFirstLetter(str) {
//     var words = str.split(' ');
//     var capitalizedWords = words.map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(' ');
//   }
//   var exampleString = 'the quick brown fox';
//   var result = capitalizeFirstLetter(exampleString);
//   console.log(result); 
  
// Question 12

// function findLongestWord(str) {
//     var longestWord = '';
//     var currentWord = '';
  
//     for (var i = 0; i < str.length; i++) {
//       var char = str[i];
  
//       if (char === ' ' || i === str.length - 1) {
//         if (i === str.length - 1) {
//           currentWord += char;
//         }
//         if (currentWord.length > longestWord.length) {
//           longestWord = currentWord;
//         }
//         currentWord = '';
//       } else {
//         currentWord += char;
//       }
//     }
  
//     return longestWord;
//   }
  
//   var exampleString = 'Web Development Tutorial';
//   var result = findLongestWord(exampleString);
//   console.log(result); 
  
// Question 13

// function countLetterOccurrences(str, letter) {
//     var count = 0; 
  
//     for (var i = 0; i < str.length; i++) {
//       if (str[i] === letter) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   var sampleString = 'JSResourceS.com';
//   var letterToCount = 'o';
//   var result = countLetterOccurrences(sampleString, letterToCount);
//   console.log(`The letter '${letterToCount}' occurs ${result} times in the string.`);
  
// Question 14

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius; 
//     console.log(`The circumference is ${circumference.toFixed(2)}`);
//   }
  
//   function calcArea(radius) {
//     var area = Math.PI * radius * radius; 
//     console.log(`The area is ${area.toFixed(2)}`); 
//   }
  
//   var radius = 5; 
//   calcCircumference(radius); 
//   calcArea(radius);         
  

// ------------------------------------------------------------END------------------------------------------------------------

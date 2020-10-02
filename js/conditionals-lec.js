"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
//if(isAdmin){
  //show admin navbar
//}

//TODO Together: Send a 20% off coupon if its users birthday
// if(isBirthday){
//     //send 20% off coupon
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
// var isRaining = true;
// if (isRaining){
//     alert("It's raining!");
//}


//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// var itemCost = 25;
// var currentBalance = 50;
// if (itemCost > currentBalance)
//     alert("Sorry, you don't have enough money!");
// }else{
//     alert("Yay you can buy the item!");
// }
//
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// var numberOfLives = 4
// if (numberOfLives === 0){
//     alert("Sorry,game over.");
// }
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// var weather = "raining"
// if(weather === "snowing"){
//     alert("It's snowing!");
// }
//
// //TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// var numberInput = 12;
// if(numberInput > 10){
//     alert("true!");
//}



//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
// var isAdmin = true;
//
// if(isAdmin) {
//     console.log("is admin");
// } else{
//     console.log("regular user");
// }
//
//
//
// //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
//
// var isRainy = false;
//
// if(isRainy) {
//     alert("it's raining!");
// } else{
//     alert("have a nice day!");
// }
//
//
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
//
// var numberOfLives = 0
//
// if(numberOfLives = 0) {
//     alert("sorry game over");
// } else{
//     alert("Next Level!");
// }
//
//
//
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// var weather = snowing;
//
// if(weather = "snowing") {
//     alert("it's snowing");
// }else{
//     alert("check back later for more details!!");
// }
//
//
//
// //TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// var numberInput = 7
//
// if(numberInput > 10) {
//     alert("true");
// }else{
//     alert("the number is less than 10");
// }
//
//
//
//
// //TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
// function checkIfGameIsOver(numberOfLives){
// if(numberOfLives === 0) {
//     return "sorry game over!";
// } else {
//     return "Next Level!";
// }
// }
//
//
// //TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
//
//
//
// // SHOULD WE DELETE STUFF EXAMPLE
// var weShouldDeleteStuff = confirm("Are you sure you want to delete everything?")
//
// if(weShouldDeleteStuff) {
//     alert("We are deleting everything...");
// } else {
//     alert("operation cancelled");
//}



//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
// var userAge = 13
//
// if(userAge >= 13) {
//     alert("you may proceed.");
// } else {
//     alert("Sorry, you are not able to proceed.");
// }

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// var weather = snowing;

// if(weather === snowing) {
//     alert("it's snowing");
// } else if (weather === raining) {
//     alert("it's raining!");
// } else {
//     alert("have a nice day!");
// }


//TODO Together: refactor the above statement as a function
//     function weather(snowing){
//     if(weather === snowing) {
//     return "it's snowing";
//     } else if(weather === "raining") {
//         return "it's raining";
//     } else {
//         return "have a nice day!";
// }
// }









// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }
//



//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

//     function checkIntersectionLight(lightColor){
//         if(lightColor === "red") {
//             return "Stop!";
//         } else if (lightColor === yellow){
//             return "Slow Down";
//         } else if (lightColor === "green") {
//             return "go"
//         } else {
//             return "proceed with caution.";
//         }
//     }
//
// console.log(checkIntersectionLight("red"))
// console.log(checkIntersectionLight("green"));



// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

//     var userAge = 16;
//     var hasPermit = true;
//     //16 && hasPermit = true: eligible for license
//     if(userAge < 15) {
//         // 14 or younger
//         alert("sorry, not eligible yet!");
//     } else {
//     //15 or older & you are eligible for license
//     if(userAge === 15){
//         alert("You are eligible for a permit!");
//     } else if (userAge >= 16 && hasPermit === true) {
//         //user is greater than or equal to 16
//         alert("you can get a license! YAY.");
//     } else if (userAge >= 16 && hasPermit === false){
//         alert("you need to have a permit 1st!");
//     } else {
//         alert("Please call support.");
//     }
//
// }

//function checkLicense(userAge)




// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


var success = false;
var message = (success) ? "operation was successful.": "oops something went wrong"
console.log(message);

//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!
var weather


// =============== SWITCH STATEMENT ================
//TODO Together:
//only works w/ statments that are equal to
var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html


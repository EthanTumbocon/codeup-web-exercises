"use strict";
// Input "Trick or Treat"
// Output: ['Trick', 'or', 'Treat']

var str = "Trick or Treat"
var inputArray = str.split(" ")
// console.log(inputArray);

inputArray.forEach(function(element, index) {
    console.log("[" + index + "] " + element);
});
//Math.random
var randomNum = Math.random() * 2;
console.log(randomNum);

//Math.round()
// cant use a decimal when referring to an array index, so lets round it to the nearest integer
var index = Math.round(randomNum)
console.log(Math.round(randomNum))

//once we have that integer lets choose a random string from our halloween array
let randomWord = inputArray[index];
console.log(randomWord);

//Math.floor()

index = Math.floor(randomNum);
console.log("Rounding down: " + index);

//Math.ceil()
//if you wanna round up no matter what the decimal place is we use Math.ceil()
index = Math.ceil(randomNum);
randomWord = inputArray[index];


//create  a new situation where we add a const to our random number

// say we wanted a random number between 74 and 186
let numBetween = Math.ceil(Math.random() * 74) + 112;
console.log("using 74 as a random base, and adding 112: " + numBetween);
 numBetween = Math.floor(Math.random() * 112) + 74;
console.log("Using 112 as a random base, and adding 74: " + numBetween);

//Math.pow()
//used to raise a number to the power of another number
//ex 4^ 2 = 16
// 8 ^ 3 = 512
let exponentResult = Math.pow(4, 2);
console.log("4 squared (or 4 ^2) = " + exponentResult);
console.log("8 cubed (8 ^3) = " + Math.pow(8, 3));

// What is another way we could find 8^x power?
let base = 8;
let exponent = 6;
let result = 8;
for(let i = 0; i < exponent; i++){
    //8, 8*8=64, 8*8*8=64*8
    result = result * base; //when i = 0, result = 8 * 8(base)
}
console.log(base + "to the " + exponent + "power" + result);


//Math.sqrt
console.log("the square root of 16 = " + Math.sqrt(16));
console.log("the square root of 64 = " + Math.sqrt(64));



//***************** Constants *****************\\
//alt(/option) + p = π
//Math.PI
//pi is used to calculate circumference and area of a circle - can also be used to get the diameter / radius of a circle when you only have the circumference or area of said circle.
//circumference = 2 * pi * r = pi * D(diameter)°
// find the circumference of a circle with a diameter of 5
let circumference = Math.PI * 5;
console.log("Circumference of a circle with a diameter of 5 = " + circumference.toFixed(3));


//lets also find that circles area.
// area of a circle = pi * r^2
let area = Math.PI * Math.pow(2.5,2); //pi * 2.5 ^2
console.log("area of a circle with a diameter of 5 = " + circumference.toFixed(3));

//Math.E
console.log("Eulers constant is equal to = " + Math.E);

console.log("The actual number represented by 8.68 x e^17 = " + Math.ceil(8.68 * Math.pow(Math.E, 17)).toFixed(2))

// Pre-exercise warmup:
//        Write a method to find a random number within a range of 2 numbers (min and a max)
//          HINT: the min and max should be passed into the method as parameters
// min = 60, max = 100
let numberBetween = Math.floor(Math.random() * 60) + 100
console.log("using 60 as a random base, and adding 100 = " + numberBetween);


// }};
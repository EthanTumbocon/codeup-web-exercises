"use strict";


/*********************************************
 *              .map
 ******************************************** */

const numbers = [1,2,3,4,5,6,7,8,9,10];

// let newArray = [];
// numbers.forEach(function(number){
//     newArray.push(number + 1);
// });
//
// console.log(newArray);


// TODO TOGETHER: Let's map through the array of numbers and add 1 to each element. Console log the new copy of the array.

// let newArray = numbers.map(function(num){
//     return num + 1;
// })
// //
// console.log(newArray);
// console.log(numbers);



//TODO: Map through the new array of numbers and this time multiply each element by 3. Console log the new copy.
// let arrayB = newArray.map(function(num){
//     return num * 3
// })
// console.log(arrayB)
//Bonus: Refactor your functions using ES6
// let arrayB = numbers.map(num => num * 1);

/*********************************************
 *              .filter
 ******************************************** */
const binary = [1,1,1,1,0,0,1,1,1,1];

// TODO TOGETHER: Let's filter through our binary and return all the true values. We'll store the new array in a variable named 'ones'
// const ones = binary.filter(function(x){
//     return x;
// })
// console.log(ones);
// // TODO: filter through binary again and this time, return all the false values.
// const zeros = binary.filter(function(x){
//     return x == false;
// })
// console.log(zeros);
// //Bonus: Refactor your functions using ES6
// const newOne = binary.filter(x => x == false);
//
// console.log(newOne);


const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TODO: filter through the array of objects and return all fruit type objects.
const newFruits = fruitsAndVeggies.filter(function(produce){
    return produce.type === "fruit"
})
// console.log(newFruits)
// TODO: filter through the array of objects and return all vegetable type objects.
// const newVegetables = fruitsAndVeggies.filter(function(produce){
//     return produce.type === "vegetables"
// })
// console.log(newVegetables);



// ES6 refactor
// const vegetables = fruitsAndVeggies.filter(produce => produce.type === "vegetables")
//
// //
// const fruits = fruitsAndVeggies.filter(produce => produce.type === "fruit")
//
// console.log(vegetables);
// console.log(fruits);


/*********************************************
 *              .reduce
 ******************************************** */

const numbersArray = [1, 2, 3, 4, 5];

// const sum = numbersArray.reduce(function(currentSum,currentNumber){
//     return currentSum + currentNumber;
// }, 0);


//accumulation = 0
// add 1
//accumulation = 1
//add 2
//accumulation = 3
//add 3
//accumulation = 6
//add 4
//accumulation = 10
//add 5

// final accumulation = 15


// TODO TOGETHER: Let's reduce our original numbers Array into one single value.

// TODO: Using .reduce, subtract all numbers in the numbers Array from a starting point of 100.
//
// const diff = numbersArray.reduce((currentDifference,currentNumber) =>
//     (currentDifference - currentNumber),100)

const shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

// TODO: Using .reduce, return the total number of apples.
// const totalApples = shoppingCarts.reduce((total,fruits) => {
// return total + fruits.apples
// }, 0);
// console.log(totalApples);
const colors = ['red','orange','red','blue','blue','green','red'];

// TODO: Count the number of times a color appears in this Array. Hint: your initial value should be an empty object.
const colorCount = colors.reduce(function (colorCount,color){
        if(typeof colorCount[color] === "undefined"){
            colorCount[color] = 1;
     } else {
        colorCount[color] += 1;
     }
    console.log(colorCount)
return colorCount;
},{});



const lyrics = ['we','all','live','in','a','yellow','submarine'];

//TODO TOGETHER: Using reduce, let's turn this into a string.
const oneLine = lyrics.reduce((currentString, word) => `${currentString} ${word}`);

console.log(oneLine)
// Bonus: Create an Array of all the unique fur colors! Hint: check out the ES6 'Set' data type.
//transform a set into an array: array.from(insertYourSetHere)
var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

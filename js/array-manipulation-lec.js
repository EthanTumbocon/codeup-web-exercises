"use strict";

// TODO EXERCISE: create a function that takes in an array of pies baked and return the 3 most recently baked pies (the three at the end)
var pies = [ "apple", "cherry", "key lime", "huckleberry", "rhubarb", "key lime"]
function recentPies(arr){
    return arr.slice(arr.length - 3);
}

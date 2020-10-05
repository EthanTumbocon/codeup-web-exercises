//
//
// //
//  do {
//     var userOddNumber = parseInt(prompt("Pick an odd number between 1 and 50."))
//  } while ((isNaN(userOddNumber) || userOddNumber % 2 === 0));
//  console.log(userOddNumber);


do{
    var userNumber = Number(prompt("Pick an odd number between 1 and 50."))

    if(userNumber < 1 || userNumber > 50){
        alert("Number is invalid. Please try again.");
    } else if(userNumber % 2 === 0){
        alert(userNumber + " is not odd. Please try again.");
    } else if(isNaN(userNumber)){
        alert(userNumber + " is not a number, please try again.");
    } else {
        alert("Number is valid! Thank you.");
        break;
    }


}while(true);

// for (var i = 1; i < 50; i++){
//     if(userOddNumber === i){
//     console.log("Yikes, skipping this number: " + i);
//     continue;
//     }
//     if(i % 2 !== 0){
//         console.log("Here is an odd number:" + i);
//     }
// }

for(var i = 1; i <= 50; i ++){
    if ( i % 2 === 0){
        continue;
    }

    if(i === userNumber) {
        console.log("Yikes! Skipping number " + i);
    }else {
            console.log("Here is an odd number: " + i);
    }
}


// var allCones;
// allCones = Math.floor(Math.random() * 50) + 50;
// do{
//    console.log("There is a total of : " + allCones + " cones.")
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//    if( conesBought < allCones){
//        console.log(conesBought + " cones sold.");
//        allCones -= conesBought;
//     } else if(conesBought > allCones){
//        console.log("I cannot sell you " + conesBought + " I only have " + allCones + " left.");
//    } else if (conesBought === allCones){
//        console.log("Yay, I sold the last " + conesBought +" I can go home now.")
//        break;
//    }
// }while (allCones > 0);

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have this many cones to sell: " + allCones);

do{
   var conesPurchased =  Math.floor(Math.random() * 5) + 1;

   if(conesPurchased > allCones){
       var outOfStock = "Can't sell you " + conesPurchased + " because I only have " + allCone
       console.log(outOfStock)
   }else{
       allCones -= conesPurchased;
       var soldCones = conesPurchased + "cones sold..." + allCones + " to go!";
       console.log(soldCones);
   }
}while(allCones > 0 );


// This expression will generate a random number between 1 and 5
//Math.floor(Math.random() * 5) + 1;














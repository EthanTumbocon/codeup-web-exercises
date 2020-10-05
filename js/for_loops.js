"use strict";
        // for (/*initialization*/; /*condition*/; /*increment*/) {
        // 	body
        // }





        function showMultiplicationTable(input) {
            for (var i = 1; i <= 10; i++) {
               var product = input * i;
               console.log(input + " x" + i + "=" + product);
            }
        }
// showMultiplicationTable(7)


        // for(var i = 20; i <= 200; i++) {
        //     var randomNumber = Math.floor((Math.random() * (200 - 20 + 1)) + 20)
        //     if (i % 2 === 0) {
        //         console.log(randomNumber + " is even");
        //     } else if (i % 3 === 0) {
        //         console.log(randomNumber + " is odd");
        //     }
        // }
// runs 10 times
// each random number must be between 20 - 200
// say whether number is odd or even

for(var i = 0; i < 10; i ++) {
    var randomNumber = Math.floor((Math.random() * (200 - 20 + 1)) + 20)

    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd.");
    }
}


         // var x = "";
         // for(var x = 1; i <= 9; i++){
         //     x+=1;
         //     console.log(i * x);
         // }

// solution 1 for pyramid

for(var i = 1; i <= 9; i++){
    var output = '';

    for(var j = 1; j <= i; j++){
        output += i;
    }
    console.log(output);
}
for(var i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));
}


         for(var i = 100; i <= 5; i+=5){
             console.log(i)
         }

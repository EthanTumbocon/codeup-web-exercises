    "use strict";
    //
    // console.log("Hello from external Javascript");
    // // Use the alert function to show a message that says 'Welcome to my Website!'.
    //   alert("Welcome to my Website!");

    // //     Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.

    //     var favoriteColor = prompt("What is your favorite color?")
    //     console.log(alert("Great!  " + favoriteColor + " is my favorite color too!"))

    //     For example, if the user enters "blue", your code should alert a message that says:
    //     "Great, blue is my favorite color too!"

    // var DaysLM = Number(prompt("How many days are you renting The Little Mermaid?"));
    //
    // var DaysBB = Number(prompt("How many days are you renting Brother Bear?"));
    //
    // var DaysH = Number(prompt("How many days are you renting Hercules?"));
    //
    // var total = Number(alert("Your total will be " + (DaysLM * 3 + DaysBB * 3 + DaysH * 3)));
    //
    //
    // var Google = Number(prompt("How many hours did you work at Google? "));
    //
    // var Facebook = Number(prompt("How many hours did you work at Facebook?"));
    //
    // var Amazon = Number(prompt("How many hours did you work at Amazon?"));
    //
    // var total = Number(alert("You got paid " + (Google * 400 + Facebook * 350 + Amazon * 380)));

    // var classIsNotFull = confirm("Class is not full");
    //
    // var classScheduleDoesNotConflict = confirm(" Schedules do not conflict.");
    //
    // var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict
    //
    // var alertMessage = "Student enrolled"+ studentEnrolled;
    //
    // alert(alertMessage);

    var numberOfItems = Number(prompt("How many items for checkout?"))

    var offerIsValid = confirm("Is the offer expired?");

    var isPremiumMember = confirm("Are you a premium member?");


    //true && (true || false)
    //true && (false || true)
    //false && (true || true)

    var discountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2 )

     alert ("product discount: " + discountApplied)


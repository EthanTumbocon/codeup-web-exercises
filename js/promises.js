"use strict";

// function wait(numMilliSeconds){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, numMilliSeconds)
//     });
// }

//simplified ES6
// function wait(numMilliSeconds){
//     return new Promise ((resolve) => {
//         setTimeout(resolve, numMilliSeconds)
//     });
// }
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const dateOfLastCommit = (username) => {
 let url = `https://api.github.com/users/${username}/events`
    return fetch(url, {headers:{'Authorization': '${gitHubToken}'}})
        .then(response => response.json())
        .then(events => events.filter(event => event.type === 'PushEvent'))
        .then(pushEvents =>
            console.log(pushEvents[0].created_at));
    }
    // dateOfLastCommit(username);




    // fetch(`https://api.github.com/users/${username}/events` , {headers:{'Authorization': 'token' + gitHubToken }})
    //     .then(res => res.json())
    //     .then(console.log)
    //     .catch(console.error);































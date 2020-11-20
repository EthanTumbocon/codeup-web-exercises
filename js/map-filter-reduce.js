const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// users.languages = undefined;
// const newArray = users.filter(function(languages,){
// var languageCount = 0;
// var languageArray = [];
// if(users.languages > 3)
//     newArray.push(languages + 1)
//     languageArray = languageCount + 1
// })
// console.log(newArray)

// Use .map to create an array of strings where each element is a user's email address
// let newArray = users.map(function(email){
//     return
// })




//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce((currentYears,currentNumber) =>    (users.yearsOfExperience = x++), 0);
console.log(totalYears)


//Use .reduce to get the longest email from the list of users.










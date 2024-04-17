/*
Lesson : Practice Sheet
Date : 17, April, 2024.
*/

// Ques 1 : Use logical operator to find whether the age of a person lies between 10 and 20 ?

const input = require('readline-sync');
// let age = input.question("Enter your age: ");
// if (age > 10 && age <20){
//     console.log(age, ",Your age lies between 10 and 20.")
// }
// else{
//     console.log(age, ",Your age doesn't lies bwteen 10 and 20.")
// }


// Ques 2 : Demonstrate the use of Switch case Statement in JavaScript.

let age1 = input.question("Enter your age : ")
switch (age1){
    case "12" : 
    console.log("Your age is 12");
    case "13" : 
    console.log("Your age is 13");
    break
    case "14" : 
    console.log("Your age is 14");
    case "15" : 
    console.log("Your age is 15");
    default : 
    console.log("Your age is not special");
}

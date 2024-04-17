/*
Lesson : Practice Sheet
Date : 17, April, 2024.
*/

// Ques 1 : Use logical operator to find whether the age of a person lies between 10 and 20 ?

const input = require('readline-sync');
let age = input.question("Enter your age: ");
if (age > 10 && age <20){
    console.log(age, ",Your age lies between 10 and 20.")
}
else{
    console.log(age, ",Your age doesn't lies bwteen 10 and 20.")
}

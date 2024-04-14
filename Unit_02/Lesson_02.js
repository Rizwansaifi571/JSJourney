/*
Lesson : Conditional Statements.
Date : 14, April, 2024.
*/

const readlineSync = require('readline-sync');
let a = readlineSync.question('Hey, what\'s your age? ');
a = Number.parseInt(a);
if (a > 0){
    console.log("This is an invalid age ")
}
else if (a < 9){
    console.log("You are a kid")
}
else if (a < 18 && a >= 9){
    console.log("Just Wait")
}
else{
    console.log("You can now drive")
}
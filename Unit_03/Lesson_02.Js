/*
Lesson : While loop and there types.
Date : 17, April, 2024.
*/

// Example : Code for while loop.

input = require("readline-sync")

num = input.question("which Table you want :")
let i = 0 ;
while(i<10){
    i++;
    console.log(num, "*", i, "=", num*i)
}

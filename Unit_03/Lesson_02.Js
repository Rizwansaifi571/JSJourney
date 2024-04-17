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


// Example1 : Code for do-while loop.

num1 =  input.question('Enter number for table : ')
let x = 0;
do{
    x++
    console.log(num1, "*", x, "=", num1*x)
}
while(x<10)

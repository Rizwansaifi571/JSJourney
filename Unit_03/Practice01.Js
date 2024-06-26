/*
Lesson : Practice Sheet.
Date : 17, April, 2024.
*/


// Ques 1 : Write a program to print the marks of a student in an object using for loop.    

let marks = {
    Rizwan : 99, 
    Jai : 98, 
    Vishal : 88, 
    Dev : 77, 
    Saurav : 90
}

for(let i = 0 ; i < Object.keys(marks).length ; i++){
    console.log("The marks of", Object.keys(marks)[i], "are", marks[Object.keys(marks)[i]])
}

// Ques 2 : Write the program in Q1 using for in loop.

let mark = {
    Rizwan : 99, 
    Jai : 98, 
    Vishal : 88, 
    Dev : 77, 
    Saurav : 90
}

for(x in mark){
    console.log("The marks of", x, "is : ", mark[x])
}


// Ques 3 : Write a program to print "try again" until the user enters the correct number.

const input = require("readline-sync")
corr = 26
ask = input.question("Enter your number : ")
if(ask != corr){
while(corr != ask){
    console.log("Try Again... ")
    ask = input.question("Enter your number : ")
}
console.log("You have enter the correct number.")
}
else{
    console.log("You have enterd the correct number.")
}



// Ques 4 : Write a function to find mean of 5 numbers.

let sum = 0;
for(let a = 1 ; a <= 5 ; a++){
    num = input.question("Enter your numbers : ")
    num=parseInt(num);
    sum += num
}
result = sum / 5;
console.log("Mean of 5 numbers is : ", result);

// Other Method.

const mean = (a, b, c, d) => {
    return(a + b + c + d) / 4
}
console.log(mean(4, 5, 6, 8))


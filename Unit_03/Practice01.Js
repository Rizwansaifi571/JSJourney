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


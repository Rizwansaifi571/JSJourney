/*
Exercise - Guess the Number.
Date : 27, April, 2024.
*/


/* Exercise : 
 Write a program to generate a random number and store it in a variable.
The program then takes an input from the user to tell them whether the guess
was correct , greater or lesser than the original number.
100 - (no. of guesses) is the score of the user the program is expected to 
terminate once the number is guessed. Number should be between 1 - 100.
*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomNumber = getRandomInt(1, 100);


input = require('readline-sync')
let i = 0
let num ;
do{
    i += 1
    num = input.question("\nEnter The Number : ")
    if (num == randomNumber){
        console.log("\nYour Number Is Matched With Original Number 😊 😊")
        console.log("The Score is :", 100 - i)
        console.log("And The Original Number is :", num)

    }
    else if (num > randomNumber){
        console.log("\nYour Number Is Greater Than Original Number 🥲  🥲")
    }
    else if (num < randomNumber){
        console.log("\nYour Number Is Lesser Than Original Number 🥲  🥲")
    }
}
while (num != randomNumber)
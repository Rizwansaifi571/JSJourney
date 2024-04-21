/*
Lesson - Practice Sheet.
Date : 21, April, 2024.
*/

// Ques 1 : Explore the includes, startWith and endsWith function of a string. 

let sentence  = "My name is Rizwan and I am Perfect."
let word1 = "Perfect"
let word2 = "Perfect."
let word3 = "My"
console.log(sentence.includes(word1))
console.log(sentence.endsWith(word2))
console.log(sentence.startsWith(word3))

// Ques 2 : Write a program to convert a given string to lowercase. 

sentence  = "My name is Rizwan and I am Perfect."
console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())

// Ques 3 : Extract the amount out of this given string.
//              "Please give Rs 1000"

let str = "Please give Rs 1000"
console.log(str.slice(15))
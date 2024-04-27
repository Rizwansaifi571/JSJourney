/*
Lesson - Looping Through Arrays.
Date : 27, April, 2024.
*/

// Classical For Loop.
let num = [3, 5, 1, 2, 4] 
for (let i = 0 ; i<num.length ; i++){
    console.log(num[i])
}


// For Each Loop.
num = [3, 5, 1, 2, 4] 
num.forEach((element) => {
    console.log(element)
})


// Array from.
let name1 = 'Harry'
let arr = Array.from(name1)
console.log(arr)


// For...of loop.
num = [3, 5, 1, 2, 4] 
for(let item of num){
    console.log(item)
}


// For...in loop.
num = [3, 5, 1, 2, 4] 
for(let item1 in num){
    console.log(num[item1])
}

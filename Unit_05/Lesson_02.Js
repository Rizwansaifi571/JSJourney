/*
Lesson - Functions of Array.
Date : 22, April, 2024.
*/

// Example : Array Functions.

let num = [1, 7, 9]
let a = num.toString()
console.log(a, typeof a)

num = [7, 9, 13]
a = num.join("-")
console.log(a, typeof a)

num = [1, 2, 7]
a = num.pop()
console.log(a)
console.log(num)

num = [1, 2, 7]
a = num.push(58)
console.log(a)
console.log(num)


num = [1, 2, 7]
a = num.unshift(58)
console.log(a)
console.log(num)


num = [1, 2, 7]
a = num.shift(58)
console.log(a)
console.log(num)

num = [7, 8, 9, 10]
delete num[1]
console.log(num)
console.log(num.length)
/*
Lesson - Functions of Array.
Date : 27, April, 2024.
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

let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [9, 8, 7]
console.log(a1.concat(a2, a3))


num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num.sort()      // sort as alphabetically.
console.log(num)   


// Sorting using compare function.
let compare = (a, b) => {
    return a - b
}
num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num.sort(compare)      // sort as numerically.
console.log(num)   


// reverse function.
num.reverse()
console.log(num)


// splice function. 
num = [1, 2, 3, 4, 5]
num.splice(2, 1, 23, 24)
console.log(num)


// Slice Function. 
num = [1, 2, 3, 4, 5]
console.log(num.slice(2))
console.log(num.slice(1, 3))


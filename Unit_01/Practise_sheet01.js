// Lesson : Practise Question.
// Date : 13, april, 2024.

// Ques 1 : Create a variable of type string and try to add a number to it.

let a = "Rizwan"
let b = a + 10
console.log(a + 10)
console.log(b)

// Ques 2 : Use typeof operator to find the data type of the string in last question.
console.log(typeof(b))

// Ques 3 : Creat a const object in Js . can you change it to hold a number later ?
const market = {
    item1 : "bed", 
    price1 : 20000, 
    item2 : "sofa", 
    price2 : 14000
}
console.log(market["item2"])
console.log(market.item1)
console.log(market["price2"])
market["item3"] = "chair"
market["price3"] = 25000
market["price2"] = 16000
console.log(market)

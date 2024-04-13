// Chapter : Variable And Data.
// Date : 9, April, 2024.


// The value of Js variable can be changed during the execution of a program because Js is an dhynamic language.
// Example :-
var a = 67;
console.log(a);
var a = "harry";
console.log(a);
// variable is determined only during runtime.

// Var, const and let both are used as to determine and identifier.

var a = "this"
{
var a =26
console.log(a)
}
console.log(a)

let b = "this"
{
let a =26
console.log(a)
}
console.log(a)




// Var, Let v/s Const :

// point 1 : var -> golbally scoped , let and const -> block scoped.
// example 1 :

var p = "Rizwan"

{
    var p = 'Saifi'
    console.log(p)
}
console.log(p)


// example 2 :

let q = "Rizwan"

{
    let q = 'Saifi'
    console.log(q)
}
console.log(q)


// point 2 : var can be updated and re-declared with in its scope.
// example 1 :

var a = 10
var a = 5
console.log(a)

// example 2 :
var c = 2
var c = 10
console.log(c)

//point 3 : let can be updated but not re-declared.
//example 1 : 
let d = 10
//let d = 6
console.log(d)  // -> error occur

//example 2 : 
let e = 10
e = 2
console.log(e)

// point 4 : const can neither be updated but nor be re-declared.

// point 5 : var variable are initialized with undefined whereas let and const variables are not initialized.
// example 1 : 
var f ;
console.log(f)

// example 2 : 
let g;
console.log(g)

// example 3 : 
// const h;   -> syntaxError: missing initializer.
// console.log(h)





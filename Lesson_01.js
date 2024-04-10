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



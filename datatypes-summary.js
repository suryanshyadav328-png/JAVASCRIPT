//PRIMITIVE

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is dynamic language
const outsideTemp = false
const id = Symbol('123')
const anotherId = Symbol('123') // these are not same as symbol is used for differentiating

console.log(id === anotherId);

//REFERENCE (Non Primitive)

const bigNumber = 345565656545656n


// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
 console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);

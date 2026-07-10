//PRIMITIVE

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is dynamic language
// const outsideTemp = false
// const id = Symbol('123')
// const anotherId = Symbol('123') // these are not same as symbol is used for differentiating

// console.log(id === anotherId);

//REFERENCE (Non Primitive)

// const bigNumber = 345565656545656n


// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

// const myFunction = function(){
//  console.log("Hello world");
// }

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3




// ++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let myYoutube = "suryansh"
let anotherName = myYoutube
anotherName = "chaiaurcode"

console.log(myYoutube);

console.log(anotherName);

let user1 = {
    email: "user@google.com",
    upi: "user@bl"
}

let user2 =  user1

user2.email = "suryansh@google.com"

console.log(user1.email);

console.log(user2.email);


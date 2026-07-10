const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 1123.8966

// console.log(otherNum.toPrecision(3)); 
// for 1123.8966 => 1.12e+3 & for upto 4 => 1124
// for 123.8966 => 124
// for 23.8966 => 23.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// commas according to Indian Number System


/// ++++++++++++++ MATHS ++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));

console.log(Math.random());
console.log( (Math.random()*10) + 1); // + 1 kyunki 0.04 jaisi cheez bhi to aa skti h, usko avoid krne k liye
console.log( Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1))
 console.log(Math.floor(Math.random() * (max - min + 1)) + min)



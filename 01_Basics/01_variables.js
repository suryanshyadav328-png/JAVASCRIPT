const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2      // not allowed



accountEmail = "abc@gmail.com"
accountPassword = "3446"
accountCity = "BLR"

console.log(accountId);


/*

Prefer not to use "var" because of issue in block scope
& functional scope

*/



console.table([accountId, accountEmail, accountPassword, accountState])
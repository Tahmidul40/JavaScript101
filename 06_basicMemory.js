/* Stack (Primitive) and Heap (Non- Primitive)
Primitive - 
    1. String
    2. Number
    3. Bigint
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol
    8. Object
Non Primitive -
    1. An object
    2. An array
    3. A date
*/


// Stack - (Primitive)
let myGamil = "user@gmail.com"
let anotherGmail = myGamil
anotherGmail = "tahmid@gmail.com"

console.log(myGamil);
console.log(anotherGmail);



// Heap - (Non- Primitive)
let playerOne = {
    name: "Venom",
    gmail: "venomgamer@game.com"
}

let playerTwo = playerOne

playerTwo.name = "flash"

console.log(playerOne.name);
console.log(playerTwo.name);
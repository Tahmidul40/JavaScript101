// DataType conversion confusion
let score1= "33"
console.log("score1: " + score1 + " is " + typeof score1); // string

let score2 = 33
console.log("score2: " + score2 + " is " + typeof score2); // number

let score3 = "33abc"
console.log("score3: " + score3 + " is " + typeof score3); // string

let score4 = null
console.log("score4: " + score4 + " is " + typeof score4); // object

let score5 = true
console.log("score5: " + score5 + " is " + typeof score5); // boolean

let score6 = false
console.log("score6: " + score6 + " is " + typeof score6); // boolean

let score7 = ""
console.log("score7: " + score7 + " is " + typeof score7); // empty string


// changing to Number
console.log("Changing to Number:");

// changing string to Number
let changingScore1Number = Number(score1)
console.log(changingScore1Number); // 33

// changing number to Number
let changingScore2Number = Number(score2)
console.log(changingScore2Number); // 33

// changing string to Number
let changingScore3Number = Number(score3)
console.log(changingScore3Number); // NaN (Not a Number)

// changing null to Number
let changingScore4Number = Number(score4)
console.log(changingScore4Number); // 0

// changing boolean value to Number
let changingScore5Number = Number(score5)
console.log(changingScore5Number); // 1

// changing boolean value to Number
let changingScore6Number = Number(score6)
console.log(changingScore6Number); // 0

// changing empty string to Number
let changingScore7Number = Number(score7)
console.log(changingScore7Number); // 0




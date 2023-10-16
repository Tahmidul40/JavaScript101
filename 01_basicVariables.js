const accountId = 122433
let accountEmail = "example32@gmail.com"
var accountPassword = 234323
accountCity = "Mirpur"

/*
Prefer not to use var
beacause of issue in block scope and functional scope
*/

// acountId = 23432 // Not Allowed // constant value
// console.log(accountID)

accountEmail = "abc234@gmail.com"
accountPassword = 332352
accountCity = "Savar"

console.table([accountId, accountEmail, accountPassword, accountCity])


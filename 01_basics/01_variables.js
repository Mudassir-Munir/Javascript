const accountId = 12345
let accountEmail = "mudassir@yopmail.com"
var accountPassword = "12345"
accountCity = "Islamabad"
let accountStatus

// accountId = 2 // not allowed

accountEmail = "mmm@yopmail.com"
accountPassword = "112233"
accountCity = "Lahore"

/*
Prefer not to use var due to block and functional scope issue, i.e 
if you change one variable in one code block it changes other variable of same name if present in another code block
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus])



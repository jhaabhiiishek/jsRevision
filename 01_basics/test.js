const accountId = 0;
let accountEmail = "abhi10092003@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// Possible to declare this way
let accountState;

// accountId = 2 (not allowed)
console.log(accountId);

/*
	Prefer not to use var because of block scope issues
*/

accountEmail ="aj@ab.com"
accountPassword="2794809"
accountCity = "Bengaluru"
console.log([accountState,accountEmail,accountId,accountPassword,accountCity])
//accountState = undefined as the value was never initialized
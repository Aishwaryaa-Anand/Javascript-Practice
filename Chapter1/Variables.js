console.log("Hello");
const accountId=433345
let accountName="Aishwarya"
var accountEmail="aishwarya@gmail.com"

//accountId=123456  //const cannot be redeclared and cannot be changed
accountName='Teju' // let cannot be redeclared
var accountEmail='teju@gmail.com'
console.table([accountId,accountName,accountEmail])

/*
SUMMARY:
var-->old method, can be redeclared and value can be changed, block scope issues
const--> neither can be redeclared nor value can be changed
let--> newer way, cannot be redeclared but value can be changed
*/
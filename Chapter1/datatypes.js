"use strict"  //used to treat all js code as newer version

//alert(3+3)   // alert is not defined here coz it's node.js not browser..

let myName='aishwarya'
let age=20
let isLoggedin=true
let state;
let city=null

console.log(typeof myName) //string
console.log(typeof age)   //number
console.log(typeof isLoggedin)  //boolean
console.log(typeof state)  //undefined
console.log(typeof city)  //null-->object



/*
SUMMARY:

primitive datatypes
1.string => "", '', `extended functionality`(allow us to embed variables and expressions into a string by wrapping them in ${…})
2.number => to represent integers, floats, decimals.
3.boolean => true and false
4.undefined => If a variable is declared, but not assigned.
5.null => It’s just a special value which represents “nothing”, “empty” or “value unknown”.
6.bigInt => to represent integers of arbitrary length(2^53).
7.symbol => used to create unique identifiers for objects.
//There is no character type.

Non-primitive:
1.Object => objects are used to store collections of data and more complex entities.

*/
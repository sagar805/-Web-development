//                     primitive

//  7 types : String  ,  Number , Boolean , null , undefined, Symbol , BigInt 


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('1234')
const anotherId = Symbol('123')

console.log(Id === anotherId)

// const bigNumber = 13254363773878282n


//   Refrence  ( Non primitive)

//  Array , Objects , Function


const heros =["shaktiman","naagraj","doga"]
let myobj ={
    name: "sagar",
    age: 20,
}


const myFunction = function(){
    console.log("hello world");


}

console.log(typeof outsideTemp)

// ####################################################################################
//  stack ( primitive) or heap memory (Non-primitive)
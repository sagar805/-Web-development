function saymyname(){
    console.log("S")
    console.log("A")
    console.log("G")
    console.log("A")
    console.log("R")
  
}
// saymyname()

// function addtwoNumbers(numbers1,numbers2){
//     console.log(numbers1 + numbers2)

// }
// addtwoNumbers(3, 5)


function addtwoNumbers(numbers1,numbers2){

    // let result = numbers1 + numbers2
    // console.log("sagar");
    // return result   
    return numbers1 + numbers2

}
const result = addtwoNumbers(3 , 5)
// console.log("result:",result)

function loginusermessage(username = "guptaji"){
    // if(username === undefined){
    if(!username){                                              //   only syntax difference
        console.log("please enter a username")
        return
    }
    return`${username} just logged in`

}
// console.log(loginusermessage("sagar"))
// console.log(loginusermessage())


function calculateCartprice(...num1){
    return num1

}

// 

const user = {
    username: "sagar",
    prices: 200
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`)
}
//  handleobject(user)
 handleobject({
    username:"guptaji",
    price: 399
 })

 const myNewArray = [200,400,100,600]

 function returnSecondVAlue(getArray){
    return getArray[1]

 }
//  console.log(returnSecondVAlue(myNewArray))
 console.log(returnSecondVAlue( [200 , 400 , 500 , 1000]))
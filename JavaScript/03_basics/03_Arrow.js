const user ={
    username: "sagar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()

// user.username = "guptaji"
// user.welcomeMessage()

// console.log(this);




// function chai(){
//     console.log(this);
    
// }

// chai()


const chai = () =>{
    let username = "sagar"
    console.log(this.username);
}
// chai()



// ##################################################  ARROW FUNCTION DECLERATION ##########################################################


// const addTwo = (num1 , num2) => {
//     return num1 + num2

// } 

//############################################# IMPLICIT RETURN ##################################################################

const addTwo1 = (num1 , num2) =>  num1 + num2
const addTwo2 = (num1 , num2) =>  (num1 + num2)
const addTwo = (num1 , num2) =>  ({username: "sagar"})


console.log(addTwo1(3 , 4))
console.log(addTwo2(3 , 4))
console.log(addTwo(3 , 4))

// const myArray =[2,3,4,5,8]

// myArray.forEach()
// if

const isUserloggedIn = true

if(isUserloggedIn){     // do not execute the code in false condition 

    console.log(isUserloggedIn);
}



const isUserloggedIn1 = true

if(2 === "2"){     

    console.log("executed");  
    }

                                                          // < , > , <= , == , != , === , !==



const temperature = 41

if(temperature === 41){
    console.log("less than 50");
    
}  else{
    console.log("temperature is greater than 50"); 
}



const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}



const balance = 1000;

if(balance < 500){
console.log("less than 500");

} else if (balance < 750){
console.log("less than 750");

} else if (balance < 900){
    console.log("less than 900");
    
}else{
    console.log("less than 1200");
    
}


const userLoggedIn  = true
const debitcard = true
const creditcard = false

if(userLoggedIn && debitcard && creditcard){
    console.log("Allow to buy course");                // If any one condition is false then the value will be returned false.
}else {
    console.log("do not allow the course");
}


const userLoggedIn1  = false
const debitcard1 = false

if(userLoggedIn1 || debitcard1){
    console.log("Allow to buy course");   // If any one condition is true then the value will be returned true.
} else{
        console.log("do not allow the course");
     }


                                         //  Nullish coalescing operator (??); null or  undefined

    let val1;
    // val1 = 5 ?? 10
    // val1 = null ?? 10
    // val1 = undefined ?? 15 
    val1 = null ?? 10 ?? 20

    console.log(val1);

                                                        // terniary operator

    // condition ? True : false

    const iceTeaPrice = 100
    iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")
    

    


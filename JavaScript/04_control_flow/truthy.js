const userEmail = "sagae@gmail.com"

if(userEmail){
    console.log("got user email");
    
} else {
    console.log("dont have user email");
    
}


const userEmail1 = ""

if(userEmail1){
    console.log("got user email");
    
} else {
    console.log("dont have user email");
    
}


const userEmail2 =[]

if(userEmail2){
    console.log("got user email");
    
} else {
    console.log("dont have user email");
    
}

                                              //falsy values

                                  // false , 0 , -0 , BigInt 0n , " " , null , undefined , Nan ,


                                             // truthy  values

                                               // " 0 " , 'false' " " , [] , {} , function(){}


if (userEmail2.length === 0) {
    console.log("array is empty");
    
}


const emptyObj = {}

    if (Object.keys(emptyObj).length === 0) {
        console.log("object is empty");
        
    }
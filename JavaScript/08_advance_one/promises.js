const promiseOne = new Promise(function(resolve,reject){
    // DO an async task
    //DB calls cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() 
    }, 1000)
})
promiseOne.then(function(){
    console.log("promise consumed");   
})




const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example"})
    }, 1000)
})
promiseTwo.then(function(user){
    console.log(user);
    
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "sagar", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseThree.then((user) =>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
    

}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("the promise is either resolved or rejected"))



const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        }else{
            reject('ERROR: js went wrong')
        }
    }, 1000)
})

async function consumePromiseFour(){
   try {
    const response = await PromiseFour
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFour()



//  async function getAllUsers(){
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
//             const data = await response.json()
//             console.log(data);
//         } catch (error) {
//             console.log("E: ", error);
//         }
//     }
    
//     getAllUsers()




    

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

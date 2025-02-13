// singleton

// object create


// object literals

const mySym = Symbol("Key")

const jsUser = {
    name: "Sagar",
    "full name": "Sagar Gupta",
    [mySym]: "myKey1",
    age: 20,
    location: "jalaun",
    email: "sagar644@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "sagar888@gmailk.com"
// console.log(jsUser)

// Object.freeze(jsUser)
jsUser.email = "sagarmicrosoft@gmailk.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello JS User,${this.name}`);
}
console.log(jsUser.greeting2());






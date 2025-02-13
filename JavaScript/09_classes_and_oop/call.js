function setUsernname(username) {
    // Complex DB calls
    this.username = username;
    console.log("called");
    
}

function createUser(username, email, password) {
    // Call setUsernname with 'this' context
    setUsernname.call(this, username); 

    this.email = email;
    this.password = password;
}

// Create an instance
const chai = new createUser("chai", "chai@fb.com", "123");

// Print the object
console.log(chai);



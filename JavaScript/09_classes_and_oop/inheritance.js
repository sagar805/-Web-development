class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username,eamil,password){
        super(username)
        this.email = this.email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by by ${this.username}`);
        
    }
}
const chai = new Teacher("chai", "cahsgslopo@ mail","13245")
chai.addCourse()

const masalachai = new User("masalachai")
    
    masalachai.logMe()

    console.log(chai === Teacher);
    console.log(chai === masalachai);
    console.log(chai instanceof User);
    
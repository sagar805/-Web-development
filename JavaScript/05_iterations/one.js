                              //   for

for ( let index = 0; index <= 10; index++){
    const element = index;
    if (element == 5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
}

for (let i = 0; i <= 10 ; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {  
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);  
    }
}
let myArray = ["flash ","batman","superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}



                                                       // break and continue

//   for (let index = 0; index <= 20; index++) {
//     if (index == 5){
//         console.log(`detected 5`);
//         break
//     }
// console.log(`value of i is ${index}`);
// }

for (let index = 0; index <= 20; index++) {
    if (index == 5){
        // console.log(`detected 5`);
        continue                                 // SKIP FOR ONE TIME
    }
// console.log(`value of i is ${index}`);
}




                                                       // WHILE LOOP
let index = 0
while (index <= 10) {
    // console.log(`value of index is ${index}`);
    index = index + 2   
}


let myArray1 = ["flash ","batman","superman"]
let arr = 0
while (arr < myArray.length) {
    // console.log(`value is ${myArray[arr]}`);
    arr = arr+1
}


                              // do while loop
let score = 11
do {
    // console.log(`score is ${score}`);
    score++
} while (score <=10);


 // for of loop

const arr1 = [1,2,3,4,5]
 for (const num of arr1) {
     // console.log(num);  
 }


const greetings = "hello world!"
 for (const greet of greetings){
    //  console.log(`Each char is ${greet}`);
 }
                                

                                       // Maps             only print a unique value


 const map = new Map()
 map.set('IN',"India")
 map.set('USA', "United state of america")
 map.set('Fr',"France")

//  console.log(map);


 for(const [key , value] of map){
    // console.log(key, ':-', value); 
 }


 const myObject = {
    'game1' : 'NFS',
    'game2': 'spiderman'
 }
//  for(const [key , value] of map){
//      console.log(key, ':-', value); 
//  }


const myObject1 = {
    js: 'javascript',
     cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject1) {
    // console.log(myObject1[key]); 
    // console.log(`${key} shortcut is for ${myObject1[key]}`); 
}



const programing = ["js","rb","py","java","cpp"]
for (const key in programing) {
//     console.log(programing[key]);
}


const coding = ["js","ruby","java","python","c++"]
// coding.forEach(function (item){
//     console.log(item);
    
// })


// coding.forEach((item) => {
//     console.log(item);
// })



// coding.forEach((item , index, arr) => {
//     console.log(item , index,arr);
// })



const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
 
myCoding.forEach((item) => {
    console.log(item.languageName);
    
})


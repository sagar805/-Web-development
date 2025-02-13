/////////////////////////////////////////   DATES    //////////////////////////////////////////////////////////////////


let myDate = new Date()
console.log(myDate.toString())    //  output   Wed Jan 29 2025 21:32:49 GMT+0530 (India Standard Time)

console.log(myDate.toISOString())      //    2025-01-29T16:03:18.220Z
                                     

  console.log(myDate.toLocaleString())   //    29/1/2025, 9:36:53 pm

  console.log(typeof myDate)    //   object

  let myCreatedDate1 = new Date(2023,0,23)
  console.log(myCreatedDate1.toDateString());                    //   Mon Jan 23 2023   month start 0 in java script.

let myCreatedDate2 = new Date(2023,0,23, 5,3)
console.log(myCreatedDate2.toLocaleString());                      //  23/1/2023, 5:03:00 am


let myCreatedDate3 = new Date("2023-01-23")                    
console.log(myCreatedDate3.toLocaleString());                //  23/1/2023, 5:30:00 am

let myCreatedDate4 = new Date("01-23-2023")                    //  23/1/2023, 12:00:00 am
console.log(myCreatedDate4.toLocaleString());     

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate3.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDay());






  



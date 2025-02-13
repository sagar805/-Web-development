// const myNums = [1,2,3,4]
// const myTotal = myNums.reduce(function (acc , currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);    
//     return acc + currval
// }, 0 )
// console.log(myTotal);




const myNums = [1,2,3,4]
const myTotal = myNums.reduce( (acc , curr) => acc+curr, 0)
console.log(myTotal);




const shoppingCart = [
    {
        itemname: "js course",
        price: 299
    },
    {
        itemname: "PY course",
        price: 399
    },
    {
        itemname: "MOBILE DEV course",
        price: 499
    },
    {
        itemname: "da course",
        price: 599
    },
    {
        itemname: "se course",
        price: 699
    },
]
const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price , 0)
console.log(priceToPay);


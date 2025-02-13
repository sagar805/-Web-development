const name = "sagar"

const repoCount = 50
// console.log(name + repoCount + "value"); not good

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Sagar-sg')

console.log(gameName[0]);

console.log(gameName.__proto__)

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-7 , 4)
console.log(anotherString);

const newStringone = "     sagar  "
console.log(newStringone)
console.log(newStringone.trim())  // trim remove the spaces

const url = "https://sagar.com/sagar%20gupta"
console.log(url.replace('%20','-'))

console.log(url.includes('sagar'))

console.log(url.includes('Satayam'))

console.log(gameName.split('-'));
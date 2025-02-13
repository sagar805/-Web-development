// Immediately Invoked Function Expressions(IIFE)

(function chai(){        // named iife
    console.log(`DB CONNECTED`);
    
})();           // and krne ke liye semicolon lgana pdega 

( () => {       // unnone iffe
    console.log(`DB CONNECTED TWO`); 
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); 
})('sagar')




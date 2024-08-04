// Task 1: 
// Create a module that exports a function to add two numbers. Import and use 
// this module in another script.
//solution: 
import { add } from "./functions.js";
console.log(add(2,3));

//Task 2: 
// Create a module that exports an object representing a person with properties and 
// methods. Import and use this module in another script.
//solution: 
import { Person } from "./functions.js";
console.log(Person);

// Task 3: 
// Create a module that exports multiple functions using named exports. Import and use 
// these functions in another script.
//solution: 
// Named exports allow us to export multiple functions, variables, or classes 
// from a single file as separate entities.
               // Task 1 and Task 2 are a result of named exports in functions.js

// Task 4: 
// Create a module that exports a single function using default export. Import and use this 
// function in another script.
//solution: 
// for default export :
// 1) only one function in file from where it is exported
// 2) import can be from any name and no need to use braces
import fun from "./subtract.js";
console.log(fun(5,2));

// Task 5: 
// Create a module that exports multiple constants and functions. Import the entire module 
// as an object in another script and use its properties.
//solution: 
import * as myModule from "./functions.js";
console.log(myModule.add(15,17));
myModule.Person.surname="Ahuja"
console.log(myModule.Person);



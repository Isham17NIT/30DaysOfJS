//task 1--> create a string using template literals that includes person's name and age
let personName="John";
let personAge=34;
let personInfo=`Hi ${personName}, you are ${personAge} years old.`;
console.log(personInfo);
// output : Hi John, you are 34 years old.


//task 2--> multi-line string using template literals
let str=`Hi
I am Isham
from NIT Kurukshetra.`;
console.log(str);
// output : 
// Hi
// I am Isham
// from NIT Kurukshetra.


//task 3--> array destructuring to extract 1st and 2nd element from array of numbers
const arr1=[1,2,3,4,5];
let [first,second,...args1]=arr1;
console.log(`First element : ${first} ; Second element : ${second}`);
// output : First element : 1 ; Second element : 2


//task 4-->object destructuring to extract title and author from a book object
const book={
    name:"The Secret Seven",
    author:"Enid Bylton",
    genre:"mystery",
    price:120,
};
const {name,author,...args2}=book;
// here args2 is an object not an array
console.log(name);
console.log(author);
//output:
// The Secret Seven
// Enid Bylton


//task 5--> Use the spread operator to create a new array that includes all 
// elements of existing array and additional elements. Log the new array to the console.
const originalArray=[1,2,3,4,5];
const newArray = [...originalArray,6,7,8,9,10];
console.log(`Original array : ${originalArray}`);
console.log(`Updated array : ${newArray}`);
// output:
// Original array : 1,2,3,4,5
// Updated array : 1,2,3,4,5,6,7,8,9,10


//task 6--> use rest operator in a function to accept any number of arguments
// sum them and return the result
function calculateSum(...args3)
{
    let total=0;
    for(let i of args3)
    {
        total=total+i;
    }
    return total;
}

let result=calculateSum(1,2,3,4,5);
console.log(result);
//output : 15


//task 7--> function that takes 2 parameters & returns their product with 
// second parameter having default value 1. call this function with the second 
// parameter
function multiply(a,b=1)
{
    return a*b;
}
console.log(multiply(3,4));
//output : 12


//task 8--> use enhanced object literals to create an object with methods and properties
let gear=3;
let speed=42;
const bike={
    gear,
    speed,
    setSpeed(s)
    {
        this.speed=s;
    },
    setGear(g)
    {
        this.gear=g;
    }
}
bike.setSpeed(47);
bike.setGear(4);
console.log(bike);
//output
// {
//     gear: 4,
//     speed: 47,
//     setSpeed: [Function: setSpeed],
//     setGear: [Function: setGear]
// }


//task 9--> create an object with computed property names based on variables
let var1="firstName";
let var2="lastName";
const obj={
    [var1]:"Isham",
    [var2]:"Ahuja"
};
console.log(obj);
//output : { firstName: 'Isham', lastName: 'Ahuja' }







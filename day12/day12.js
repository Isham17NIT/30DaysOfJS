// Activity 1 Basic Error Handling with try and catch

//Task1 : 
// Write a function that intentionally throws an error and use a try-catch 
// block to handle the error and log an appropriate message to the console
function throwError()
{
    throw new Error("This is an intentionally thrown error!");
}
try{
    throwError();
}
catch(error)
{
    console.log(error.message); // error.message will only print the message contained in the error
}

//Task2 : 
//Create a function that divides two numbers and throws an error if 
// denominator is zero. Use a try-catch block to handle this error
let divide=(num1,num2)=>{
    try{
        if(num2===0)
            throw new Error("Division by zero is not possible");
        else
            console.log(num1/num2);
    }
    catch(error){
        console.log(error.message);
    }
}
let num1=5;
let num2=0;
divide(num1,num2);

// Activity 2 Finally Block

//Task 3 :
// Write a script that includes a try-catch block and a finally block. 
// Log messages in the try, catch, and finally blocks to observe th execution flow
let n1=5,n2=2;
try{
    console.log("Executing try block..");
    if(n2===0)
        throw new Error("Denominator can't be zero");
    else
        console.log(n1/n2);
}
catch(error)// will only execute if an error is raised in the try block
{
    console.log("Executing catch block statements..")
    console.log(error.message);
}
finally//will always run whether error occurred or not
{
    console.log("Executing finally block..");
    console.log("All errors have been handled.")
}

// Activity 3 Custom Error Objects

//Task 4 :
// Create a custom error class that extends the built-in Error class. Throw 
// an instance of this custom error in a function and handle it using 
// try-catch block
class customError1 extends Error{
    ;
}
function errorHandling(m,n)
{
    try{
        if(m===0 && n===0)
            throw new customError1("Custom error has been thrown");
        else
            console.log(num1**num2);
    }
    catch(error)
    {
        console.log(error.message);
        console.log("Error Handling in progress..");
        n=1;
        console.log("Final ans : ",m**n);
        console.log("Error handled");
    }
}
errorHandling(0,0);

//Task 5 : 
// Write a function that validates user input (eg checking if a string is not empty) 
// and thows a custom error if validation fails. Handle the custom error 
// using a try-catch block
class customError2 extends Error{
    ;
}
function validateInput(str)
{
    try{
        if(str.length===0)
            throw new customError2("Invalid string");
        else
            console.log("Valid string");
    }
    catch(error){
        str+="0";
        console.log("Validated string :",str);
    }
        
}
//   uncomment below lines to take input and validate the string
let str=prompt("Enter a string : ");
console.log(str);
validateInput(str);

// Activity 4 Error Handling in Promises

//Task 6 :
// Create a promise that randomly resolves or rejects. Use .catch() to handle 
// the rejection and log an appropriate message to the console
//solution
const randomFunction = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let r = Math.floor(Math.random() * 10)
        if(r<5)
            resolve("executed successfully");
        else{
            reject(new Error("something went wrong"));
        }
    },2000);
    })
}
randomFunction().then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err.message);
});

//Task 7 : 
// Use try-catch within an async function to handle errors from a 
// promise that randomly resolves or rejects and log the error message
(async function (){
    try{
    let promise = await randomFunction();
    console.log(promise);
    }
    catch(err){
        console.log(err);
    }
})();

// Activity 5 Graceful Error Handling in Fetch

//Task 8 : 
// Use the fetch API to request data from an invalid URL and handle the error 
// using .catch(). Log an appropriate message to the console
//solution:
const URL = 'https://zoo-animals-api.p.rapidapi.com/animals/rand/10/randomData';
const option = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '50920d862amsh183ad305193748dp1d2eb2jsnb6d30ebed125',
		'x-rapidapi-host': 'zoo-animals-api.p.rapidapi.com'
	}
};

const funPromise = ()=>{
    return new Promise((resolve,reject)=>{
        fetch(URL,option).then((response)=>{
            if(response.ok)
                resolve(response.text());
            else{
                reject(`something went wrong   Error : ${response.status}`);
            }
        })
        .catch((err)=>{
            reject(err);
        })
    })
}
funPromise().then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.log(err);
})

//output : something went wrong   Error : 404

//Task 9 :
// Use the fetch API to request data from an invalid URL within an async function and handle 
// the error using .catch(). Log an appropriate message to the console
//solution:
const url = 'https://zoo-animals-api.p.rapidapi.com/animals/rand/10';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '50920d862amsh183ad305193748dp1d2eb2jsnb6d30ebed125',
		'x-rapidapi-host': 'zoo-animals-api.p.rapidapi.com'
	}
};

(async function (){
try {
	const response = await fetch(url,options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
})()

//output : 404 (Not Found)






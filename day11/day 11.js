// Activity 1: Understanding Promises

// * Task 1: Create a promise that resolves with a message after a 
// 2-second timeout and log the message to the console
//Solution :


// • Task 2: Create a promise that rejects with an error message after a 
// 2-second timeout and handle the error using catch()
//Solution :

// Activity 2: Chaining Promises

// * Task 3: Create a sequence of promises that simulate fetching data 
// from a server. Chain the promises to log messages in a specific order.
//Solution :

// Activity 3: Using Async/Await 

// • Task 4: Write an async function that waits for a promise to resolve 
// and then logs the resolved value. 
//Solution :

// Task 5: Write an async function that handles a rejected promise 
// using try-catch and logs the error message.
//Solution :

//  Activity 4: Fetching Data from an API

// * Task 6: Use the fetch APl to get data from a public API and log the 
// response data to the console using promises.
//Solution :

//  • Task 7: Use the fetch API to get data from a public API and log the
//  response data to the console using async/await.
//Solution :

//  Activity 5: Concurrent Promises

// * Task 8: Use Promise.all to wait for multiple promises to resolve and 
// then log all their values. 
//Solution :

// • Task 9: Use Promise.race to log the value of the first promise that 
// resolves among multiple promises.
//Solution :

let promise = new Promise((resolve,reject)=>{
    console.log("I am a Promise");
    resolve();
});
console.log(promise);
// reject means-> work will be done but error will be there
// 3 states of Promise : pending, fulfilled(resolved), rejected
// resolve & reject are callbacks provided by JS
// by default state of a promise is pending
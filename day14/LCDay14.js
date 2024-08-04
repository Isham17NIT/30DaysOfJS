//LeetCode 2621--> Sleep
// Given a positive integer millis, write an asynchronous function that sleeps
//  for millis milliseconds. It can resolve any value.

//solution :
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

//LeetCode 2637--> Promise Time Limit
// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. 
// fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function 
// should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited 
// function should reject with the string "Time Limit Exceeded".

//solution : 
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const fns=fn(...args);
        const p=new Promise((result,reject)=>{
            setTimeout(()=>{
                reject('Time Limit Exceeded')
            },t);

        })

        return Promise.race([fns,p]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
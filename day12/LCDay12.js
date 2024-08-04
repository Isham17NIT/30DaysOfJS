//Leetcode 2666 -> Allow One Function Call

// Given a function fn, return a new function that is identical to the 
// original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the 
// same result as fn. Every subsequent time it is called,it should return 
// undefined.

//SOLUTION :
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let isCalled=false;
    return function(...args){
        if(!isCalled) // first time called
        {
            isCalled=true;
            return fn(...args);
        }
    }
};
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn) //onceFn will be the function returned by once
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

//Leecode 2629 -> Function Composition

// Given an array of functions [f1, f2, f3, ..., fn], return a new function
// fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity 
// function f(x) = x.
// You may assume each function in the array accepts one integer as input 
// and returns one integer as output.

//SOLUTION :
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        if(functions.length==0)
            return x;
        let val=x;
        for(let i=functions.length-1;i>=0;i--)
        {
            val=functions[i](val);
        }
        return val;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

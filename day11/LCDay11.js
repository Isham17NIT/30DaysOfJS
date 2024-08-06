// LeetCode 2634 -> Filter Elements from Array
// Given an integer array arr and a filtering function fn, 
// return a filtered array filteredArr.
// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for 
// which the expression fn(arr[i], i) evaluates to a truthy value. 
// A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

//solution :
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArray = [];
    arr.forEach((val)=>{
        if(fn(val,arr.indexOf(val)))
            filteredArray.push(val);
    });
    return filteredArray;
};



// LeetCode 2626 -> Array Reduce Transformation
// Given an integer array nums, a reducer function fn, and an initial
// value init, return the final result obtained by executing the fn 
// function on each element of the array, sequentially, passing in the 
// return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.
//solution :
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let ans=init;
    if(nums.length!=0)
    {
        nums.forEach((val)=>{
            ans=fn(ans,val);
        });
    }
    return ans;
};
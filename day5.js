//Task 1--> function to check if number is even or odd
function checkEvenOrOdd(num)
{
    if(num%2==0)
        return "even";
    else
        return "odd";
}
let num=8;
console.log(`${num} is ${checkEvenOrOdd(num)}`);
//Output : 8 is even


// Task 2--> function to calculate square of a number and return result
function calculateSquare(n1)
{
    return n1**2;
}
let n1=17;
console.log(`${n1}^2 = ${calculateSquare(n1)}`);
//Output : 17^2 = 289


//Task 3--> Max of two numbers using function expression
const max = function(a,b){
    if(a>=b)
        return a;
    else
        return b;
};
let num1=45,num2=34;
console.log(`${max(num1,num2)} is maximum`);
//Output : 45 is maximum


//Task 4--> function expression to concatenate two strings
const concatenateStr = function(str1,str2){
    return str1+str2;
}
str1="NIT";
str2="KKR";
console.log(`Concatenation of ${str1} and ${str2} results in ${concatenateStr(str1,str2)}`);
//Output : Concatenation of NIT and KKR results in NITKKR


//Task 5--> Arrow function to calculate sum of 2 numbers
const sum = (a,b)=> a+b;
let a=5,b=4;
console.log(`${a}+${b}=${sum(a,b)}`);
//Output : 5+4=9


//Task 6--> Arrow function to check if string contains a particular character
const stringCheck = (str,c)=>{
    if(str.indexOf(c)!=-1)
        return true;
    else
        return false;
}
let str="Isham", c='s';
console.log(stringCheck(str,c));
// Output: true


//Task 7--> function that takes 2 parameters and return their product. Provide default value for second parameter
const product = function (a,b=1){
    return a*b;
}
let n3=5,n4=3;
console.log(product(n3,n4));
// Output : 15


//Task 8--> function that takes name and age with a default value for age and prints greeting
function greeting(Name,age=18)
{
    console.log(`Hello ${Name}. Your age is ${age}`);
    return;
}
let Name = "Isham",age=19;
greeting(Name,age);
//Output : Hello Isham. Your age is 19


//Task 9--> Higher Order Function that accepts a function and a number and calls that function that many times
function fun()
{
    console.log("Hello");
    return;
}
function hof(fun,n5)
{
    for(let i=1;i<=n5;i++)
        fun();
    return;
}
hof(fun,7);
// Output : Hello will be printed 7 times


// Task 10--> 
function f1(n)
{
    return n*2;
}
function f2(n)
{
    return n+5;
}
function func(f1,f2,val)
{
    let result=f1(val);
    return f2(result);
}
console.log(func(f1,f2,7));
// Output : 19

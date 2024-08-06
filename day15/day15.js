             // Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner 
// function accesses a variable from the outer function's scope. Call the inner 
// function and log the result.
//solution :
function outerFunction(){
    let str="Hello Everyone!"
    function innerFunction(){
        console.log(str);
    }
    innerFunction();
}
outerFunction();

// Task 2: Create a closure that maintains a private counter.Implement functions to 
// increment and get the current value of the counter.
//solution :
function closure1(){
    let counter=0;
    function incrementCounter(){
        counter++;
        return counter;
    }
    function getCounter(){
        return counter;
    }
    return{
        incrementCounter,
        getCounter
    };
}
let c1=closure1();//here c1 is an object with two properties which are functions
console.log(c1.incrementCounter());//1
console.log(c1.getCounter());//1
console.log(c1.incrementCounter());//2


             // Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to 
// keep track of the last generated ID and increment it with each call.
//solution :
function closure2(){
    let lastId="";
    const symbols=[".","!","#","*","^"]
    function generateId(){
        lastId="Hello@"+Math.floor(Math.random()*10)+symbols[Math.floor(Math.random()*symbols.length)];
    }
    function getLastId(){
        return lastId;
    }
    return {
        generateId,
        getLastId
    };
}
let c2=closure2();//here c2 is an object with two properties which are functions
console.log(c2.getLastId());//empty string
c2.generateId();
console.log(c2.getLastId());//Hello@5*
c2.generateId();
console.log(c2.getLastId());//Hello@7!

// Task 4: Create a closure that captures a user's name and returns a function 
// that greets the user by name.
//solution :
function closure3(Name){
    function greeting(){
        return `Hello ${Name}, welcome back!`;
    }
    return greeting;
}
let c3=closure3("Isham");
console.log(c3());//Hello Isham, welcome back!
let c4=closure3("Jai");
console.log(c4());//Hello Jai, welcome back!

             // Activity 3: Closures in Loops

// Task 5: Write a loop that creates an array of functions. Each function 
// should log its index when called. Use a closure to ensure each function logs 
// the correct index.
//solution :
function closure4(){
    let arr=[];
    for(let i=0;i<5;i++)
    {
        arr[i]=function(){
            console.log("Hey there! function "+(i+1)+" here!");
            console.log("Index :"+i);
        };
    };
    return arr;
}
let arr=closure4();
arr[2]();
arr[4]();
// Hey there! function 3 here!
// Index :2
// Hey there! function 5 here!
// Index :4

             // Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of 
// items. Implement methods to add, remove, and list items.
//solution :
function manage(){
    let items=[];
    function addItem(itemName){
        items.push(itemName);
    }
    function removeItem(itemName){
        let idx=items.indexOf(itemName);
        if(idx!=-1)
            items.splice(idx,1);//1 for removing one element
    }
    function listItems(){
        let str="Items list : "
        for(let i of items)
            str=str+i+" ";
        console.log(str);
    }
    return{
        addItem,
        removeItem,
        listItems
    };
}
let m=manage();
m.addItem("Eraser");
m.addItem("Pencil");
m.addItem("Ruler");
m.addItem("Pen");
m.addItem("Sharpener");
m.listItems();
m.removeItem("Pencil");
m.listItems();
// Items list : Eraser Pencil Ruler Pen Sharpener 
// Items list : Eraser Ruler Pen Sharpener 

             // Activity 5: Memoization
        
// Task 7: Write a function that memoizes the results of another function. Use 
// a closure to store the results of previous computations.
//solution :
//example->calculationg 2**n
function fun1(){
    cache1={
        0:1,
    };
    return function fun2(n){
        if(n in cache1){
            console.log("in cached stmt");
            return cache1[n];
        }            
        else{
            console.log("in regular stmt");
            cache1[n]=2*fun2(n-1);
            return cache1[n];
        }
    };
}
let f1=fun1();
console.log(f1(0));
console.log(f1(1));
console.log(f1(2));
console.log(f1(3));
console.log(f1(2));
// in cached stmt
// 1
// in regular stmt
// in cached stmt
// 2
// in regular stmt
// in cached stmt
// 4
// in regular stmt
// in cached stmt
// 8
// in cached stmt
// 4

// Task 8: Create a memoized version of a function that calculates the factorial 
// of a number.
//solution :
function memoize(){
    cache2={
        0:1,
        1:1
    };
    return function calculateFactorial(num){
        if(num in cache2){
            console.log("In cached stmt..");
            return cache2[num];
        }
        else{
            console.log("In regular stmt..");
            cache2[num]=num*calculateFactorial(num-1);
            return cache2[num];
        }
    }
}
let f2=memoize();
console.log(f2(0));
console.log(f2(1));
console.log(f2(2));
console.log(f2(3));
//output:
// In cached stmt..
// 1
// In cached stmt..
// 1
// In regular stmt..
// In cached stmt..
// 2
// In regular stmt..
// In cached stmt..
// 6










    








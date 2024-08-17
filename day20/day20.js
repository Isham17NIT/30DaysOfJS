// ACTIVITY 1 : UNDERSTANDING LOCAL STORAGE

//Task1 Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
let str = "This string is stored in localStorage";
localStorage.setItem("String",str);
console.log(localStorage.getItem("String"));

//output : This string is stored in localStorage


//Task2 Write a script to save an object to localStorage by converting it to json string. Retrieve and parse the object and log it.

const obj = {
    name : "Isham",
    age : "19"
}
localStorage.setItem("Object",JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("Object")));

//output : {name: 'Isham', age: '19'}


// ACTIVITY 2 :  USING LOCAL STORAGE

//Task3 : Create a simple form that saves user input (eg name and email) to local Storage when submitted. Retrieve and display the saved data on page load.
let name1 = document.querySelector("#name");
let email = document.querySelector("#email");
let btn1 = document.querySelector("#btn1");
let displayName = document.querySelector("#displayName");
let displayEmail = document.querySelector("#displayEmail");

btn1.addEventListener("click",()=>{
    let n = name1.value;
    let e = email.value;
    localStorage.setItem("name1",n);
    localStorage.setItem("email1",e);

})



/* output : Isham
            isham@gmail.com
*/


//Task4 Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

console.log(localStorage);
/* output :
{name1: 'Isham', 
email1: 'isham@gmail.com', 
String: 'This string is stored in localStorage', 
Object: '{"name":"Isham","age":"19"}', 
length: 4}
*/
localStorage.removeItem("String");
console.log(localStorage);
/* output:
{name1: 'Isham', 
email1: 'isham@gmail.com'
, Object: '{"name":"Isham","age":"19"}', 
length: 3}
*/

// ACTIVITY 3 : UNDERSTANDING SESSION STORAGE

//Task5 : Write a script to save a string value to SessionStorage and retrieve it. Log th retrieved value.

let str3 = "This string is stored in session storage";
sessionStorage.setItem("Str",str3);
console.log(sessionStorage.getItem("Str"));

//output : This string is stored in session storage

//Task 6 : Write a script to save an object to sessionStorage by converting it to json string. Retrieve and parse the object and log it.

const vehicle = {
    type : 'car',
    speed : '100 km/h'
}
sessionStorage.setItem("vehicle",JSON.stringify(vehicle));
console.log(JSON.parse(sessionStorage.getItem("vehicle")));
//output : {type: 'car', speed: '100 km/h'}


//ACTIVITY 4 : USING SESSION STORAGE

//Task 7 : Create a simple form that saves user input (eg name and email) to session Storage when submitted. Retrieve and display the saved data on page load.
let b1 = document.querySelector("#branch");
let r1 = document.querySelector("#rollNumber");
let displayBranch = document.querySelector("#displayBranch");
let displayRollNumber = document.querySelector("#displayRollNumber");
btn1.addEventListener("click",()=>{
    let b = b1.value;
    let r = r1.value;
    console.log(r1);
    sessionStorage.setItem("Branch1",b);
    sessionStorage.setItem("Roll1",r);
    location.reload();
})

window.addEventListener("load",()=>{
    let n = localStorage.getItem("name1");
    let em = localStorage.getItem("email1");
    let br = sessionStorage.getItem("Branch1");
    let ro = sessionStorage.getItem("Roll1");
    displayName.innerText = "Name is : " + n;
    displayEmail.innerText = "Email is : " + em;
    displayBranch.innerText = "Branch is : " + br;
    displayRollNumber.innerText = "Roll Number is : " + ro;
})

/* output :
Branch is : computer engineering
Roll Number is : 123
*/

//Task8 Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log(sessionStorage);
/* output : 
{Str: 'This string is stored in session storage', IsThisFirstTime_Log_From_LiveServer: 'true', vehicle:
 '{"type":"car","speed":"100 km/h"}', Branch1: 'computer engineering', Roll1: '123', …}
*/
sessionStorage.removeItem("Roll1");
console.log(sessionStorage);
/* output :
{Str: 'This string is stored in session storage', IsThisFirstTime_Log_From_LiveServer: 'true', 
vehicle: '{"type":"car","speed":"100 km/h"}', Branch1: 'computer engineering', RollNumber1: '', …
*/



//ACTIVITY 5 : COMPARING LOCAL STORAGE AND SESSION STORAGE

//Task9 Write a function that accepts a key value pair and saves the values to both local and session storage. Retrieve and log them.

function saveValues(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
}

function retrieve() {
    console.log("LocalStorage");
    for (let i = 0; i < localStorage.length; i++) {
        console.log(`Key: ${localStorage.key(i)}  Value: ${localStorage.getItem(localStorage.key(i))}`);
    }

    console.log("SessionStorage");
    for (let i = 0; i < sessionStorage.length; i++) {
        console.log(`Key: ${sessionStorage.key(i)}  Value: ${sessionStorage.getItem(sessionStorage.key(i))}`);
    }
}

saveValues("key1", "value1");
saveValues("key2", "value2");
retrieve();

// output:
// LocalStorage
    //  Key: key2  Value: value2
    //  Key: key1  Value: value1
//  SessionStorage
    //  Key: key2  Value: value2
    //  Key: key1  Value: value1


// Task 10
// Clearing localStorage and sessionStorage
localStorage.clear();
sessionStorage.clear();
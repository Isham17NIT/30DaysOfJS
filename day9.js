//Task 1--> select HTML element by its id and change its text content
let heading1=document.getElementById("heading1");
heading1.innerText="Welcome to the World of Books";


//Task 2--> select HTML element by class and change its background color
let p1=document.querySelector(".info");
p1.style.backgroundColor="pink";


//Task 3--> create a new div element with some text content and append it to the body
let body = document.querySelector("body");
let div1 = document.createElement("div");
div1.style.height="fit-content";
div1.style.width="100px";
div1.innerText="Hi! I was added to the body";
div1.style.backgroundColor="yellow";
div1.style.textAlign="center";
body.append(div1);


//Task 4--> create a new li element and add it to an existing ul list.
let list1=document.getElementById("list1");
let li=document.createElement("li");
li.innerText="The Guide";
list1.append(li);


//Task 5--> select an html element and remove it from DOM
let btn2=document.querySelector('#btn2');
btn2.remove();

//Task 6--> remove the last child of a specific html element
body.lastChild.remove();


//Task 7--> select an html element and change one of its attributes
let link=document.getElementsByTagName("a");
for(let i of link)
    i.href="https://github.com/Isham17NIT/30DaysOfJS";


//Task 8--> add and remove a CSS class to/from an HTML element
li.classList.add('list-item');  //added a CSS class
li.classList.remove('list-item'); // removed the CSS class


//Task 9--> add a click event listener to a button that changes the text content of a paragraph
let btn1=document.getElementById("btn1");
btn1.addEventListener("click",()=>{
    p1.innerText="Here is a list of some of the amazing books written by renowned authors from all over the world."
});


//Task 10--> add a mouseover event listener to an element that changes its border color
p1.addEventListener("mouseover",()=>{
    p1.style.border="solid";
    p1.style.borderColor="black";
});




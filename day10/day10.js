//task 1--> Add a click event listener to a button that changes 
// the text content of a paragraph
let btn1=document.querySelector("#btn1");
let para1=document.querySelector("#para1");
btn1.addEventListener("click",()=>{
    para1.innerText="Moral values are considered an essential aspect of human life. Moral values determine one's nature, behaviour and overall attitude towards life and other people. In our lives, our decisions are primarily based on our values. The choices we make in our lives impact us and our society, organisation and nation. It is believed that a person with good values makes wise decisions that benefit everyone. On the contrary, people who have no moral values think only of themselves. They don't care about others' needs or society and make choices based solely on their needs. They create an unfriendly and sometimes unsafe environment around themselves.";
});

//task 2-->Add a double click event listener to an image that toggles its visibility.
let btn2=document.querySelector("#btn2");
let img1=document.querySelector("#img1");
btn2.addEventListener("dblclick",function(){
    if(img1.style.visibility=="hidden")
    {
        img1.style.visibility="visible";
    }
    else
    {
        img1.style.visibility="hidden";
    }      
});

//task 3--> Add a mouseover event listener to an element that changes its 
// background color
para1.addEventListener("mouseover",()=>{
    para1.style.backgroundColor="yellow";
})

// task 4--> Task 4: Add a mouseout event listener to an element that resets its background color.
// mouseout event occurs when cursor moves away from that particular element 
para1.addEventListener("mouseout",()=>{
    para1.style.backgroundColor="white";
})

//task 5--> Add a keydown event listener to an input field that logs the key
//  pressed to the console.
// The keydown event is fired when a key is pressed.
let input1=document.querySelector("#input1");
input1.addEventListener("keydown",(event)=>{
    console.log(event.key); // The event.key returns value of the key pressed during a keyboard event
})

//task 6--> Add a keyup event listener to an input field that displays the 
// current value in a paragraph.
//The keyup event is fired when a key is released.
// Provides the updated input value after the keypress.
input1.addEventListener("keyup",()=>{
    console.log(input1.value);
});

//task 7--> Add a submit event listener to a form that prevents the default 
// submission and logs the form data to the console. 
let test=document.querySelector("#test");
let dropdown1=document.querySelector("#dropdown1");
let dropdown2=document.querySelector("#dropdown2");
test.addEventListener("submit",(event)=>{
    event.preventDefault(); // to prevent default submission
    console.log(dropdown1.value);
    console.log(dropdown2.value);
});


//task 8--> Add a change event listener to a select dropdown that displays 
// the selected value in a paragraph.
let para2=document.querySelector("#para2");
dropdown1.addEventListener("change",()=>{
    para2.innerText=`Selected Option : ${dropdown1.value}`;
});


//task 9--> Add a click event listener to a list that logs the text content
//  of the clicked list item using event delegation
let list1=document.querySelector("#list1");
list1.addEventListener("click",function(event){
    let listItem=event.target;
    if(listItem.tagName=="LI")
    {
        console.log(listItem.textContent);
    }
});


//task 10--> Add an event listener to a parent element that listens for 
// events from dynamically added child elements.
let btn3=document.querySelector("#btn3");
btn3.addEventListener("click",()=>{
    let li=document.createElement("LI");
    let input3=document.querySelector("#input3");
    li.innerText=input3.value;
    list1.append(li);
    list1.addEventListener("click",(event)=>{
    if(event.target.tagName=="LI")
        console.log(event.target.innerText);
});
});

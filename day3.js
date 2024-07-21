// Task 1---> number is +ve,0 or -ve
let num=-5;
if(num>0)
    console.log(num+" is positive");
else if(num===0)
    console.log(num+" is zero")
else
    console.log(num+" is negative");

// Task2----> Voting eligibility
let age=17;
if(age>=18)
    console.log("person is eligible to vote");
else
    console.log("person is NOT eligible to vote");

// Task 3----> largest out of 3 numbers
let num1 = 34;
let num2 = 34;
let num3 = 30;
if(num1>=num2)
{
    if(num1>=num3)
        console.log(num1+" is largest");
    else // num1<num3
        console.log(num3+" is largest");
}
else // num2>num1
{
    if(num2>=num3)
        console.log(num2+" is largest");
    else // num2<num3
        console.log(num3+" is largest");
}

// Task 4----> tell day of week based on day no(1-7)
let day = 5;
switch(day)
{
    case 1:
        console.log("SUNDAY");
        break;
    case 2:
        console.log("MONDAY");
        break;
    case 3:
        console.log("TUESDAY");
        break;
    case 4:
        console.log("WEDNESDAY");
        break;
    case 5:
        console.log("THURSDAY");
        break;
    case 6:
        console.log("FRIDAY");
        break;
    case 7:
        console.log("SATURDAY");
        break;
    default:
        console.log("INVALID DAY");
}

//Task 5----> grading using switch-case
let score=45;
switch(Math.floor(score/10))
{
    case 10:
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    case 5:
        console.log('E');
        break;
    default:
        console.log('F');
}

//Task 6----> odd or even number using ternary operator
let n=5;
let result=n%2==0?n+" is even":n+" is odd";
console.log(result);

//Task 7----> yr is leap yr or not
let yr=1900;
if(yr%4==0 && (yr%100!=0 || yr%400==0))
{
    console.log(yr+" is a leap year");
}
else
{
    console.log(yr+" is not a leap year");
}
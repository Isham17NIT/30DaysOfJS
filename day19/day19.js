            // Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (e.g., match 
// all occurrences of the word "JavaScript" in a string). Log the matches.
const pattern1 = /JavaScript/g;
//g-> global(will search for all occurrences instead of only the first one)
let str1="I am currently having a hands-on JavaScript. Many developers love JavaScript";
const matches1 = str1.match(pattern1);
console.log("Matches found:", matches1);
// Matches found: [ 'JavaScript', 'JavaScript' ]


// Task 2: Write a regular expression to match all digits in a string. 
// Log the matches.
const pattern2=/[0-9]{1}/g; // or /[0-9]/g
let str2="This is a 30 day JS Challenge. Today is day19";
const matches2 = str2.match(pattern2);
console.log("Matches found :",matches2);
// Matches found : [ '3', '0', '1', '9' ]


            // Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular expression to match all words in a string that 
// start with a capital letter. Log the matches.
const pattern3=/\b[A-Z]+[a-z]*[0-9]*\b/g;
// \b \b--> indicates word boundary  and g searches for the all the matches
let str3="Hi myself Isham I am from CS branch";
const matches3 = str3.match(pattern3);
console.log("Matches found :",matches3);
// Matches found : [ 'Hi', 'Isham', 'I', 'CS' ]


// Task 4: Write a regular expression to match all sequences of one or more 
// digits in a string. Log the matches.
const pattern4=/[0-9]+/g;
let str4="Hello 58 sbqsn 47239 y13iembd";
const matches4=str4.match(pattern4);
console.log("Matches found :",matches4);
// Matches found : [ '58', '47239', '13' ]


            // Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, central office
//  code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const phoneNo="(123)456-7890";
const pattern5=/\(([0-9]{3})\)([0-9]{3})(\-{1})([0-9]{4})/;
let match5 = phoneNo.match(pattern5);
console.log(`Area Code : ${match5[1]}`);
console.log(`Central Office Code : ${match5[2]}`);
console.log(`Line Number : ${match5[4]}`);
// Area Code : 123
// Central Office Code : 456
// Line Number : 7890


// Task 6: Write a regular expression to capture the username and domain from
//  an email address. Log the captures.
const emailAddress="dnbwks123@gmail.com";
const pattern6=/([a-z]+[0-9]{3})([@]{1})(\bgmail\.com\b)/;
//parenthesis are used for grouping and indices will start 1 onwards
let matches6=emailAddress.match(pattern6);
console.log(`Username : ${matches6[1]}\nDomain : ${matches6[3]}`);
// Username : dnbwks123
// Domain : gmail.com


            // Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the 
// beginning of a string. Log the matches.
const str7="hello my name is hello";
const pattern7=/^\bhello\b/;
const matches7=str7.match(pattern7);
console.log(matches7);
// [
//     'hello',
//     index: 0,
//     input: 'hello my name is hello',
//     groups: undefined
// ]


// Task 8: Write a regular expression to match a word only if it is at the 
// end of a string. Log the matches.
const str8="hello my name is hello";
const pattern8=/\bhello\b$/;
// $ is used for endswith
const matches8=str8.match(pattern8);
console.log(matches8);
//[
//     'hello',
//     index: 17,
//     input: 'hello my name is hello',
//     groups: undefined
//   ]

            // Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password 
// (must include at least one uppercase letter, one lowercase letter, one digit,
// and one special character). Log whether the password is valid.
function hasUpperCase(p)
{
    const pattern=/[A-Z]+/;
    return pattern.test(p);
}
function hasLowerCase(p)
{
    const pattern=/[a-z]+/;
    return pattern.test(p);
}
function hasDigit(p)
{
    const pattern=/\d+/;
    return pattern.test(p);
}
function hasSpecial(p)
{
    const pattern=/[!@#$%^&*+~]+/;
    return pattern.test(p);
}
function validatePassword(p)
{
    if(hasUpperCase(p) && hasLowerCase(p) && hasDigit(p) && hasSpecial(p))
        return true;
    return false;
}
const password1="64248ncfs";
const password2="Hi@12gisj4";
let r1=validatePassword(password1) ? "Valid" : "Invalid";
let r2=validatePassword(password2) ? "Valid" : "Invalid";
console.log(`${password1} is ${r1}`);
console.log(`${password2} is ${r2}`);
// 64248ncfs is Invalid
// Hi@12gisj4 is Valid


// Task 10: Write a regular expression to validate a URL. 
// Log whether the URL is valid.
const pattern10=/^(https:\/\/)([a-zA-Z0-9-]+\.)+(com)$/;
const url1="https://www.plants.com";
const url2="https:/www.animal.cm";
let result1=pattern10.test(url1) ? "Valid url" : "Invalid url";
let result2=pattern10.test(url2) ? "Valid url" : "Invalid url";
console.log(result1);
console.log(result2);
// Valid url
// Invalid url
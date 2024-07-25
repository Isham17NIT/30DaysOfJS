//Task 1--> array of numbers from 1 to 5
const nums1 = [1,2,3,4,5];
console.log(nums1);
//Output : [ 1, 2, 3, 4, 5 ]


//Task 2--> access 1st and last element of array
const names = ["John","Bob","Alice"];
console.log(`First element : ${names.at(0)}`);
console.log(`Last element : ${names.at(names.length-1)}`);
//Output : First element : John
//         Last element : Alice


//Task 3--> push method(adds a new number at last)
const ages = [18,19,20,21];
ages.push(22);
console.log("Updated array : ",ages);
//Output : Updated array :  [ 18, 19, 20, 21, 22 ]


//Task 4--> pop method(removes last element)
const nums2=[44,67,22,15];
nums2.pop();
console.log("Updated array : ",nums2);
//Output : Updated array :  [ 44, 67, 22 ]


//Task 5--> shift method(removes first element)
const fruits = ["Apple","Mango","Orange","Kiwi"];
fruits.shift();
console.log("Updated array : ",fruits);
//Output : Updated array :  ["Mango","Orange","Kiwi"]


//Task 6--> unshift method(adds a number at beginning)
const nums3 = [35,62,86,21];
nums3.unshift(17);
console.log("Updated array : ",nums3);
//Output : Updated array :  [ 17, 35, 62, 86, 21 ]


//Task 7-->map method to create a new array where each number is doubled
const arr=[1,2,3,4,5,6,7];
const newArray = arr.map((val)=>{
    return val*2;
});
console.log(`Original Array : ${arr}`);
console.log(`New Array : ${newArray}`);
//Output:
//Original Array : 1,2,3,4,5,6,7
//New Array : 2,4,6,8,10,12,14 


//Task 8-->filter method to create a new array with only even numbers
const arr1=[1,2,3,4,5,6,7];
const even = arr1.filter((num)=>num%2==0);
console.log(even);
//Output : [2,4,6]


//Task 9-->reduce method to calculate sum of all numbers in array
const arr2=[1,2,3,4,5];
let result = arr2.reduce((sum,val)=>sum+val);
console.log(`Sum of numbers : ${result}`);
//Output : Sum of numbers : 15


//Task 10--> for loop to iterate over an array
const branches = ["CS","IT","AIML","M&C"];
for(let i=0;i<branches.length;i++)
    console.log(branches.at(i));
//Output : CS
//         IT
//         AIML
//         M&C


//Task 11--> forEach method to iterate over an array
const colors = ["red","pink","blue","green"];
colors.forEach((val)=>console.log(val));
//Output : red
//         pink
//         blue
//         green


//Task 12--> create 2D array and log entire array to console
const info = [[12,13,14],[56,45]]; // jagged array
console.log(info);
//Output : [[12,13,14],[56,45]]


//Task 13--> Access and log a specific element from 2D array
const Names=[["Priya","Yadav"],["Isham","Ahuja"]];
let rowIdx=1,colIdx=0;
console.log(Names.at(rowIdx).at(colIdx));
//Output : Isham






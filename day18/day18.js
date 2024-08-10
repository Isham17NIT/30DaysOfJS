// Task 1: Implement the bubble sort algorithm to sort an array of numbers in 
// ascending order. Log the sorted array.
function bubbleSort(arr){
    let temp=0,flag=0;
    for(let i=0;i<arr.length-1;i++)//n elements->n-1 passes
    {
        flag=0;
        for(let j=0;j<arr.length-i-1;j++)//in ith pass->total n-i comparisons
        {
            if(arr[j]>arr[j+1])
            {
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                flag=1;
            }
        }
        if(flag==0)//if in a particular pass, all elements were found to be at the correct posn
            break;
    }
}
let arr=[5,3,4,1,2];
console.log(`Original Array : ${arr}`);
bubbleSort(arr);
console.log(`Sorted array : ${arr}`);
//output:
// Original Array : 5,3,4,1,2
// Sorted array : 1,2,3,4,5

// Task 2: Implement the selection sort algorithm to sort an array of numbers 
// in ascending order. Log the sorted array.
function selectionSort(arr2)
{
    let minidx=0,temp=0;
    for(let i=0;i<arr2.length-1;i++)
    {
        minidx=i;
        for(let j=i+1;j<arr2.length;j++)
        {
            if(arr2[j]<arr2[minidx])
            {
                minidx=j;
            }
        }
        //swap arr2[i] and arr2[minidx]
        temp=arr2[i];
        arr2[i]=arr2[minidx];
        arr2[minidx]=temp;
    }
}
let arr2=[5,3,4,1,2];
console.log(`Original Array : ${arr2}`);
selectionSort(arr2);//arrays are passed by reference in js
console.log(`Sorted array : ${arr2}`);
//output:
// Original Array : 5,3,4,1,2
// Sorted array : 1,2,3,4,5

// Task 3: Implement the quicksort algorithm to sort an array of numbers in 
// ascending order. Log the sorted array.
function quicksort(arr,start,end)
{
    if(start<end)
    {
        let i=start,j=end+1,temp;
        let pivot=arr[start];
        do{
            do{
                i++;
            }while(i<=end && arr[i]<=pivot);
            do{
                j--;
            }while(arr[j]>pivot)
            if(i<j)
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }while(i<j);
        //effectively jth position is the correct position
        temp=arr[start];
        arr[start]=arr[j];
        arr[j]=temp;
    }
    quicksort(arr,start,j-1);
    quicksort(arr,j+1,end);
}
let array=[5,3,4,1,2,9,7];
console.log(`Original Array : ${array}`);
selectionSort(array);//arrays are passed by reference in js
console.log(`Sorted array : ${array}`);
//output:
// Original Array : 5,3,4,1,2
// Sorted array : 1,2,3,4,5


// Task 4: Implement the linear search algorithm to find a target value in an 
// array. Log the index of the target value.
function linearSearch(arr3,target)
{
    for(let i=0;i<arr3.length;i++)
    {
        if(arr3[i]==target)
            return i;
    }
    return -1;//if element not found
}
let target=4;
let result=linearSearch(arr2,target);
if(result==-1)
    console.log(`${target} not found in array`)
else 
    console.log(`${target} found at index ${result}`);
//output
// 4 found at index 3

// Task 5: Implement the binary search algorithm to find a target value in a 
// sorted array. Log the index of the target value.
function binarySearch(start,end,arr,target){
    while(start<=end)
    {
        let mid=Math.floor((start+end)/2);
        if(arr[mid]==target)
            return mid;
        else if(arr[mid]>target)
            end=mid-1;
        else
            start=mid+1;
    }
    return -1;
}
let ans=binarySearch(0,arr2.length-1,arr2,4);
if(ans==-1)
    console.log("target not found in array");
else
    console.log(`target found at index ${ans}`);
//output:
// target found at index 3

// Task 6: Write a function to count the occurrences of each character in a 
// string. Log the character counts.
function countOccurrences(str)
{
    const obj={

    };
    for(let i of str)
    {
        if(!(i in obj))
        {
            obj[i]=1;
        }
        else
        {
            obj[i]=obj[i]+1;
        }
    }
    return obj;
}
let answer=countOccurrences("isham ahuja");
console.log(answer);
//output:
// { i: 1, s: 1, h: 2, a: 3, m: 1, ' ': 1, u: 1, j: 1 }

//task 7 : write a function to find the longest substring of a string without repeating characters 
//and log the length of substring to console
function findLongestSubstring(str){
    let max = 0;
    for(let i=0;i<str.length;i++)
    {
        let substr = "";
        count = 0;
        for(let j=i;j<str.length;j++)
        {
            if(substr.indexOf(str[j])==-1)
            {
                substr = substr + str[j];
                count+=1;
            }
        }
        if(count>max){
            max = count;
        }
    }
    return max;
}
let str1="abcbdhbscabssabccbaa";
console.log(`length of longest substring in string ${str1} is ${findLongestSubstring(str1)}`);

//output : length of longest substring in string abcbdhbscabssabccbaa is 6

// Task 8: Write a function to rotate an array by k positions. 
// Log the rotated array.
function rotateArray(arr3,k){
    let len=arr3.length,temp=0;
    if(k==len)
        return arr3;
    if(k>len){
        k=k%len;
    }
    for(let i=0;i<k;i++)
    {
        temp=arr3.pop();
        arr3.unshift(temp);
    }
    return arr3;
}
let arr3=[1,2,3,4,5];
let k=3;
console.log(`Original Array : ${arr3}`);
rotateArray(arr3,k);
console.log(`Array after rotating : ${arr3}`);
// Original Array : 1,2,3,4,5
// Array after rotating : 3,4,5,1,2

// Task 9: Write a function to merge two sorted arrays into one sorted array. 
// Log the merged array.
function merge(array1,array2,mergedArray)
{
    let i=0,j=0;
    while(i<array1.length && j<array2.length){
        if(array1[i]<=array2[j]){
            mergedArray.push(array1[i]);
            i++;
        }
        else{
            mergedArray.push(array2[j]);
            j++;
        }
    }
    while(i<array1.length){
        mergedArray.push(array1[i]);
        i++;
    }
    while(j<array2.length){
        mergedArray.push(array2[j]);
        j++;
    }
}
let array1=[1,3,5,6,7,17];
let array2=[2,4,8,9,12];
let mergedArray=[];
merge(array1,array2,mergedArray);
console.log(mergedArray);
//output
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 17 ]



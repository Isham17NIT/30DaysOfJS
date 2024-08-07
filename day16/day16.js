// Task 1: Write a recursive function to calculate the factorial of a number. 
// Log the result for a few test cases.
function calculateFactorial(n){
    if(n<0)
        return -1;
    if(n==0)
        return 1;
    return n*calculateFactorial(n-1);
}
console.log(calculateFactorial(0)); //1
console.log(calculateFactorial(1)); //1
console.log(calculateFactorial(5)); //120
console.log(calculateFactorial(7)); //5040

// Task 2: Write a recursive function to calculate the nth Fibonacci number. 
// Log the result for a few test cases.
function calculateNthFibo(n){
    if(n==0)
        return 0;
    else if(n==1)
        return 1;
    else
        return calculateNthFibo(n-1)+calculateNthFibo(n-2);
}
console.log(calculateNthFibo(0));//0
console.log(calculateNthFibo(1));//1
console.log(calculateNthFibo(2));//1
console.log(calculateNthFibo(3));//2
console.log(calculateNthFibo(4));//3

// Task 3: Write a recursive function to find the sum of all elements in an array. 
// Log the result for a few test cases.
function calculateSum(idx,arr,sum){
    if(idx==arr.length)
        return sum;
    return calculateSum(idx+1,arr,sum+arr.at(idx));
}
const arr=[1,4,5,6];
console.log(calculateSum(0,arr,0));//16

// Task 4: Write a recursive function to find the maximum element in an array. 
// Log the result for a few test cases.
function findMax(idx,arr,max){
    if(idx==arr.length)
        return max;
    max=arr[idx]>max?arr[idx]:max;
    return findMax(idx+1,arr,max);
}
const arr2=[4,8,3,9,1];
console.log(findMax(0,arr2,arr2[0]));//9

// Task 5: Write a recursive function to reverse a string. 
// Log the result for a few test cases.
function reverseString(str){
    if(str==="" || str.length==1){
        return str;
    }
    return reverseString(str.substring(1))+str[0];
}
console.log(reverseString("hello"));//olleh
console.log(reverseString("hi"));//ihs

// Task 6: Write a recursive function to check if a string is a palindrome. 
// Log the result for a few test cases.
function checkPalindrome(str){
    if(str.length==0 || str.length==1)
        return true;
    if(str[0]===str[str.length-1])
        return checkPalindrome(str.substring(1,str.length-1));
    else
        return false;
}
console.log(checkPalindrome("radar"));//true
console.log(checkPalindrome("raddar"));//true
console.log(checkPalindrome("abca"));//false

// Task 7: Write a recursive function to perform a binary search on a sorted array. 
// Log the index of the target element for a few test cases.
function binarySearch(arr3,start,end,target){
    if(start<=end)
    {
        let mid=Math.floor((start+end)/2);
        if(arr3[mid]==target)
            return mid;
        else if(arr3[mid]>target){
            let status=binarySearch(arr3,start,mid-1,target);
            return status;
        }
        else{
            let status=binarySearch(arr3,mid+1,end,target);
            return status;
        }
    }
    else
        return -1;
}
const arr3=[3,5,7,9,10,14,18];
let result=binarySearch(arr3,0,arr3.length-1,14);
if(result==-1)
    console.log("element not found in array");
else
    console.log("Element found at idx :"+result);
//Element found at idx :5

// Task 8: Write a recursive function to count the occurrences of a target element in an array. 
// Log the result for a few test cases.
function countOccurrences(arr4,idx,count,target){
    if(idx==arr4.length)
        return count;
    if(arr4[idx]==target)
        count+=1;
    return countOccurrences(arr4,idx+1,count,target);
}
let arr4=[5,4,2,3,5,8,2,5,7,5];
console.log(countOccurrences(arr4,0,0,5));//4

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. 
// Log the nodes as they are visited.
class TreeNode{
    constructor(val){
        this.data=val;
        this.left=null;
        this.right=null;
    }
}
function inorder(root){
    if(root==null)
        return;
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}
const root=new TreeNode(1);
root.left=new TreeNode(2);
root.right=new TreeNode(3);
inorder(root);
//2 1 3

//Task 10: recursive function to find depth of binary tree
// the depth of a tree is the number of nodes along the longest path from the root node 
// down to the farthest leaf node.
function tree(val,left=null,right=null){
    this.val=val;
    this.left=left;
    this.right=right;
}
function depth(root){
    if(root==null)
        return 0;
    let lDepth=depth(root.left);
    let rDepth=depth(root.right);
    return Math.max(lDepth,rDepth)+1;
}
let root2=new tree(1);
root2.left=new tree(2);
root2.right=new tree(3);
root2.left.left=new tree(4);
root.left.right=new tree(6);                                                        
root2.left.left.left=new tree(5);


let depthOfTree=depth(root);
console.log(`depth of tree : ${depthOfTree}`);




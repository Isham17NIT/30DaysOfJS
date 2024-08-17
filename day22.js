                        //Add Two Numbers Leetcode

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
var addTwoNumbers = function (l1, l2) {
    if (l1.val == undefined)
        return l2;
    if (l2.val == undefined)
        return l1;

    let temp1 = l1, temp2 = l2;

    let ans = null;
    let temp3 = null;

    let carry = 0, sum = 0;

    while (temp1 != null && temp2 != null) {
        sum = temp1.val + temp2.val + carry;
        if (sum > 9) {
            carry = 1;
            sum = sum % 10;
        }
        else
            carry = 0;
        if (ans == null) {
            ans = new ListNode(sum);
            temp3 = ans;
        }
        else {
            temp3.next = new ListNode(sum);
            temp3 = temp3.next;
        }
        temp1 = temp1.next;
        temp2 = temp2.next;
    }
    while (temp1 != null) {
        sum = temp1.val + carry;
        if (sum > 9) {
            carry = 1;
            sum = sum % 10;
        }
        else
            carry = 0;
        temp3.next = new ListNode(sum);
        temp3 = temp3.next;
        temp1 = temp1.next;
    }
    while (temp2 != null) {
        sum = temp2.val + carry;
        if (sum > 9) {
            carry = 1;
            sum = sum % 10;
        }
        else
            carry = 0;
        temp3.next = new ListNode(sum);
        temp3 = temp3.next;
        temp2 = temp2.next;
    }
    if (carry == 1)//to handle the last carry bit
    {
        temp3.next = new ListNode(carry);
    }
    return ans;
};
// Time complexity : O(n)
// Space complexity : O(n)

                        // Longest Substring Without Repeating characters

// /**
//  * @param {string} s
//  * @return {number}
//  */
var lengthOfLongestSubstring = function(s) 
{
    //map to store current character and its index
    let myMap=new Map();
    let maxLen=0,left=0,right=0,val=0;
    while(right<s.length)
    {
        if(myMap.has(s[right]))
        {
            val=myMap.get(s[right]);//previous index of s[i]
            if(val<left)
            {
                myMap.set(s[right],right);
                maxLen=Math.max(maxLen,right-left+1)
                right++;
            }    
            else
                left=val+1;
        }
        else
        {
            myMap.set(s[right],right);
            maxLen=Math.max(maxLen,right-left+1)
            right++;
        } 
    }
    return maxLen;
};

                        //Container with Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let right = height.length -1;
    let left = 0;
    let maxArea = 0;
    while(right > left){
        let area = Math.min(height[left],height[right])*(right-left);
        maxArea = Math.max(area,maxArea);
        if(height[left] > height[right]){
            right--;
        }else{
            left++;
        }
    }
    return maxArea;
};

                        //3 Sum
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var threeSum = function(nums) 
{
    let ans=[];

    nums.sort((a,b)=>a-b);

    let i=0;
    let len=nums.length;
    for(i=0;i<len-2;i++)
    {
        if(i>0 && nums[i]==nums[i-1])
            continue; // skip duplicates
        let left=i+1,right=len-1;
        let target=0-nums[i];
        while(left<right)
        {
            let sum=nums[left]+nums[right];
            if(sum==target)
            {
                let arr=[nums[i],nums[left],nums[right]];
                ans.push(arr);
//for the next time,elements at indices left and right don't have to be taken
                do{
                    left++;
                }while(left<right && nums[left]==nums[left-1]);

                do{
                    right--;
                }while(right>left && nums[right]==nums[right+1]);
                
            }                
            else if(sum<target)
                left++;
            else
                right--;
        }
    }
    return ans;
};
//Time Complexity : O(nlogn)+O(n^2) [nlogn to sort the array]

                        //Group Anagrams
// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
var groupAnagrams = function(strs) 
{
    let myMap=new Map();
    for(let i=0;i<strs.length;i++)
    {
        let temp=[...strs[i]].sort().join('');//string representation of array of characters
        let arr;
        if(myMap.has(temp))
        {
            arr=myMap.get(temp);
        }
        else
        {
            arr=[]; //array of string
        }
        arr.push(strs[i]);
        myMap.set(temp,arr);
    }
    let ans=Array.from(myMap.values());
    return ans;
};

                   //Two Sum
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) 
// {
//     let map=new Map(); 
//     let ans=[];
//     for(let i=0;i<nums.length;i++)
//     {
//         if(map.has(target-nums[i]))
//         {
//             ans.push(i);
//             ans.push(map.get(target-nums[i]));
//             return ans;
//         }
//         else
//         {
//             map.set(nums[i],i);
//         }
//     }
//     return ans;
// };


                  //Reverse Integer 

// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function(x) 
// {
//     if(x==0)
//         return 0;
//     let m=2**31;
//     let minRange=-1*m;
//     let maxRange=m-1;
//     let reversedNum=0;
//     let sign=x>0?1:-1;
//     x=sign==1?x:-x;
//     while(x>0)
//     {
//         let digit=x%10;
//         reversedNum=reversedNum*10+digit;
//         x=Math.floor(x/10);
//         if(reversedNum*sign>=maxRange || reversedNum*sign<=minRange)
//             return 0;
//     }
//     return reversedNum*sign;
// };

                  //Palindrome Number

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) 
// {
//     if(x<0)
//         return false;
//     let maxRange=(2**31)-1;
//     let reversedNum=0;
//     let num=x;
//     while(x>0)
//     {
//         let digit=x%10;
//         reversedNum=reversedNum*10+digit;
//         x=Math.floor(x/10);
//         if(reversedNum>=maxRange)
//             return false;
//     }
//     if(reversedNum==num)
//         return true;
//     return false;
// };

                    //Merge Two Sorted Lists
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(list1, list2) 
// {
//     if(list1==null)
//         return list2;
//     else if(list2==null)
//         return list1;
//     let temp1=list1;
//     let temp2=list2;
//     let ans=new ListNode();
//     let temp=new ListNode();
//     while(temp1!=null && temp2!=null)
//     {
//         if(temp1.val<=temp2.val)
//         {
//             if(ans.val==0) //means empty node
//             {
//                 ans=new ListNode(temp1.val);
//                 temp=ans;
//             }
//             else
//             {
//                 temp.next=new ListNode(temp1.val);
//                 temp=temp.next;
//             }
//             temp1=temp1.next;
//         }
//         else
//         {
//             if(ans.val==0) //means empty node
//                 {
//                     ans=new ListNode(temp2.val);
//                     temp=ans;
//                 }
//             else
//                 {
//                     temp.next=new ListNode(temp2.val);
//                     temp=temp.next;
//                 }
//             temp2=temp2.next;
//         }

//     }
//     while(temp1!=null)
//     {
//         temp.next=new ListNode(temp1.val);
//         temp=temp.next;
//         temp1=temp1.next;
//     }
//     while(temp2!=null)
//     {
//         temp.next=new ListNode(temp2.val);
//         temp=temp.next;
//         temp2=temp2.next;
//     }
//     return ans;     
// };

                    //Valid Parenthesis

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) 
// {
//     let arr=[];
//     function isOpening(c)
//     {
//         return c=='(' || c=='{' || c=='[';
//     }
//     function isClosing(c)
//     {
//         return c==')' || c=='}' || c==']'; 
//     }
//     for(let i=0;i<s.length;i++)
//     {
//         if(isOpening(s[i]))
//             arr.push(s[i]);
//         else if(isClosing(s[i]))
//         {
//             let last=arr.length-1;
//             if(s[i]==')')
//             {
//                 if(arr[last]=='(')
//                     arr.pop();
//                 else
//                     return false;
//             }
//             else if(s[i]=='}')
//             {
//                 if(arr[last]=='{')
//                     arr.pop();
//                 else
//                     return false;
//             }
//             else if(s[i]==']')
//             {
//                 if(arr[last]=='[')
//                     arr.pop();
//                 else
//                     return false;
//             }
//         }
//     }
//     if(arr.length==0)
//         return true;
//     return false;
// };



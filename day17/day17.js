// Task 1: Implement a Node class to represent an element in a linked list with 
// properties value and next.
class Node{
    constructor(val,next=null){
        this.val=val;
        this.next=next;
    }
}
let n1=new Node(4);
n1.next=new Node(5);
console.log(n1);
// Node { val: 4, next: Node { val: 5, next: null } }

// Task 2: Implement a LinkedList class with methods to add a node to the end, 
// remove a node from the end, and display all nodes.
class LinkedList{
    constructor(){
        this.head=null;
        this.temp=this.head;
    }
    addNode(val){
        if(this.head==null)
        {
            this.head=new Node(val);
            this.temp=this.head;
        }            
        else
        {
            this.temp=this.head;
            while(this.temp.next!=null)
                this.temp=this.temp.next;
            this.temp.next=new Node(val);
        }            
    }
    removeNode(){
        this.temp=this.head;
        while(this.temp.next!=null)
            this.temp=this.temp.next;
        this.temp.next=null;
    }
    displayNodes(){
        let str="";
        this.temp=this.head;
        while(this.temp!=null)
        {
            str=str+this.temp.val+" ";
            this.temp=this.temp.next;
        }
        console.log(str);
    }
}
let l=new LinkedList();
l.addNode(1);
l.addNode(3);
l.addNode(4);
console.log(l);
l.displayNodes(l);

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), 
// and peek (view the top element).
class Stack{
    constructor(){
        this.top=-1;
        this.items=[];
    }
    push(val){
        this.items.push(val);
        this.top++;
    }
    pop(){
        if(this.top==-1)
        {
            console.log("Stack underflow");
            return -1;
        }
        this.top--;
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
}
let s=new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s);
s.pop();
s.pop();
s.pop();
s.pop();
console.log(s);
//output:
// Stack { top: 2, items: [ 1, 2, 3 ] }
// Stack underflow
// Stack { top: -1, items: [] }

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the 
// stack and then popping them off.
let str="It's raining today";
for(let i of str)
    s.push(i);
let reversedString="";
let c=s.pop();
while(c!=-1)
{
    reversedString+=c;
    c=s.pop();
}
console.log(`Original String : ${str}`);
console.log(`Reversed String : ${reversedString}`);
//output:
// Original String : It's raining today
// Reversed String : yadot gniniar s'tI

// Task 5: Implement a Queue class with methods enqueue (add element), 
// dequeue (remove element), and front (view the first element).
class Queue
{
    constructor(){
        this.front=-1;
        this.rear=-1;
        this.items=new Array(5);// supposing queue of size 5
    }
    enqueue(val){
        if(this.rear==this.items.length-1)
            console.log("Overflow");
        else{
            if(this.front==-1 && this.rear==-1)
                this.front=this.rear=0;
            else
                this.rear++;
            this.items[this.rear]=val;
        }
    }
    dequeue(){
        if(this.front==-1 && this.rear==-1)
            console.log("Underflow");
        else if(this.front==this.rear)
            this.front=this.rear=-1;
        else
            return this.front++;
    }
    printQueue(){
        console.log("Current elements in queue are :")
        for(let i=this.front;i<=this.rear;i++)
            console.log(this.items[i]);
    }
}
let q1=new Queue();
q1.enqueue(5);
q1.enqueue(7);
q1.enqueue(9);
q1.enqueue(10);
q1.enqueue(12);
q1.printQueue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.printQueue();
//output:
// Current elements in queue are :
// 5
// 7
// 9
// 10
// 12
// Current elements in queue are :
// 10
// 12

// Task 6: Use the Queue class to simulate a simple printer queue where print 
// jobs are added to the queue and processed in order.
// Task 7: Implement a TreeNode class to represent a node in a binary tree with 
// properties value, left, and right.
class TreeNode{
    constructor(val,left=null,right=null){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
let t1=new TreeNode(42);
t1.left=new TreeNode(21);
t1.right=new TreeNode(37);
console.log(t1);
//output:
// TreeNode {
//     val: 42,
//     left: TreeNode { val: 21, left: null, right: null },
//     right: TreeNode { val: 37, left: null, right: null }
//   }

// Task 8: Implement a BinaryTree class with methods for inserting values and 
// performing in-order traversal to display nodes.
class BinaryTree
{
    insert()
    {
        let temp1=parseInt(prompt("Enter data to be stored in node(-1 for no node) :"));
        if(temp1==-1)
            return null;
        else
        {
            const r=new TreeNode(temp1);
            console.log(`enter left child of ${r.val}`);
            r.left=this.insert();
            console.log(`enter right child of ${r.val}`);
            r.right=this.insert();
            return r; 
        }  
    }
    inorder(t)
    {
        if(t==null)
            return;
        this.inorder(t.left);
        console.log(t.val);
        this.inorder(t.right);
    }
}
let bt=new BinaryTree();
let root=bt.insert();
console.log(bt);
bt.inorder(root);
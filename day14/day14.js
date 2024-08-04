//Task 1: Define a class Person with properties name and age, and a method to return 
// a greeting message. Create an instance of the class and log the greeting message.
class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    greeting()
    {
        return `Hello ${this.firstname}, you are ${this.age} yrs old.`;
    }
};
let person1=new Person("Isham","Ahuja",19);
console.log(person1.greeting()); //Hello Isham, you are 19 yrs old.

// Task 2: Add a method to the Person class that updates the age property 
// and logs the updated age
// we can't use arrow function here as ()=>{} don't have their own 'this' context.
Person.prototype.setAge=function(newAge){
    this.age=newAge;
}
person1.setAge(20)
console.log(person1.age); //20

//Task 3: Define a class Student that extends the Person class. Add a property 
// studentId and a method to return the student ID. Create an instance of the 
// Student class and log the student ID.
class Student extends Person
{
    static numOfStudents=0;
    constructor(firstname,lastname,age,studentId)
    {
        super(firstname,lastname,age);
        this.studentId=studentId;
        Student.numOfStudents+=1;
    }
    getStudentId()
    {
        return this.studentId;
    }
    greeting()
    {
        return `Hello ${this.firstname} you are ${this.age} yrs old and your userId is ${this.studentId}`
    }
}
let student1=new Student("Isham","Ahuja",19,"NITKKR@123");
console.log(student1.getStudentId()); //NITKKR@123

//Task 4: Override the greeting method in the Student class to include the 
// student ID in the message. Log the overridden greeting message.
console.log(student1.greeting());

//Task 5: Add a static method to the Person class that returns a generic 
// greeting message. Call this static method without creating an instance of 
// the class and log the message.
Person.genericGreeting=function(){
    return "Welcome back Guys!";
}
console.log(Person.genericGreeting());
//here genericGreeting is a static method so it can be called directly with the class name

//Task 6: Add a static property to the Student class to keep track of the number 
// of students created. Increment this property in the constructor and log the 
// total number of students.

        //property added inside student class
console.log("No. of registered students :",Student.numOfStudents);

//Task 7: Add a getter method to the Person class to return the full name 
// (assume a firstName and lastName property). Create an instance and log the 
// full name using the getter.
Person.prototype.getName=function(){
    return `${this.firstname} ${this.lastname}`;
}
let person2=new Person("Jai","Ahuja",14);
console.log(person2.getName()); // Jai Ahuja

//Task 8: Add a setter method to the Person class to update the name properties 
// (firstName and lastName). Update the name using the setter and log the 
// updated full name.
Person.prototype.setName=function(newFirstName,newLastName){
    this.firstname=newFirstName;
    this.lastname=newLastName;
}
person2.setName("Isham","Ahuja");
console.log(person2.getName()); // Isham Ahuja

//Task 9: Define a class Account with private fields for balance and a method 
// to deposit and withdraw money. Ensure that the balance can only be updated 
// through these methods.
class Account{
    #balance;
    constructor(currBalance)
    {
        this.#balance=currBalance;
    }
    depositMoney(amt)
    {
        this.#balance+=amt;
    }
    withdrawMoney(amt)
    {
        if(amt<=this.#balance)
            this.#balance-=amt;
        else    
            console.log("Not enough balance to withdraw balance");
    }
    getBalance()
    {
        return this.#balance;
    }
}

//Task 10: Create an instance of the Account class and test the deposit 
// and withdraw methods, logging the balance after each operation.
let account1=new Account(3450);
account1.depositMoney(50);
console.log("Current balance = Rs.",account1.getBalance()); //3500
account1.withdrawMoney(100);
console.log("Current balance = Rs.",account1.getBalance()); //3400
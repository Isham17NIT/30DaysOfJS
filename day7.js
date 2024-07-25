// Task 1--> create a book object with some properties
const book={
    title:"The Secret Seven",
    author:"Enid Blyton",
    year:2007,
};
console.log(book);
//output: { title: 'The Secret Seven', author: 'Enid Blyton', year: 2007 }


//Task 2--> access and log title and author properties of book object
console.log(`Title of Book : ${book.title}`);
console.log(`Author of Book : ${book.author}`);
//Output : Title of Book : The Secret Seven
//         Author of Book : Enid Blyton


//Task 3--> add a method to book object that returns string with book's title and author
book.getInfo1=function() {
    return `${this.title} written by ${this.author}`;
}
console.log(book.getInfo1());
// Output : The Secret Seven written by Enid Blyton


//Task 4--> add a method to book object takes a parameter year and updates the book's year
book.setYear=function(yr){
    this.year=yr;
};
book.setYear(2010);
console.log(book.year);
//Output : 2010


//Task 5--> create a nested object representing a library with properties like 
            //name and books(an array of book objects) and log the library object to the console
const library={
    name:"MyLibrary",
    books : [
        {
            title:"The Great Gatsby",
            author:"F. Scott Fitzerald"
        },
        {
            title:"Wings of Fire",
            author:"Dr. A.P.J Abdul Kalam"
        },
        {
            title:"Famous Five",
            author:"Enid Blyton"
        }
    ], // array of book objects
}
console.log(library);
//output :
// {
//     name: 'MyLibrary',
//     books: [
//       { title: 'The Great Gatsby', author: 'F. Scott Fitzerald' },
//       { title: 'Wings of Fire', author: 'Dr. A.P.J Abdul Kalam' },
//       { title: 'Famous Five', author: 'Enid Blyton' }
//     ]
// }


//Task 6--> access and log the name of the library and the titles of all the books in the library
console.log(library.name);
for(let i of library.books)
{
    console.log(`${i.title} written by ${i.author}`);
}
//output:
// MyLibrary
// The Great Gatsby written by F. Scott Fitzerald
// Wings of Fire written by Dr. A.P.J Abdul Kalam
// Famous Five written by Enid Blyton


//Task 7--> add a method to book object that uses this keyword to return a string with book's title and yr
book.getInfo2=function(){
    return `${this.title} published in ${this.year}`;
}
console.log(book.getInfo2());
//Output : The Secret Seven published in 2010


// Task 8--> use for-in loop to iterate over properties of bok and log each property and its value
for(let i in book)
{
    console.log(`${i} : ${book[i]}`);
}
//Output :
// title : The Secret Seven
// author : Enid Blyton
// year : 2010
// getInfo : function() {
//         return `${this.title} written by ${this.author}`;
//     }
// setYear : function(yr){
//         this.year=yr;
//         return;
//     }


//Task 9--> use Object.keys and Object.values methods to log all keys and values of the book object
const keys = Object.keys(book);
const values = Object.values(book);
console.log("Keys : "+keys);
console.log("Values : "+values);
//Output:
// Keys : title,author,year,getInfo1,setYear,getInfo2
// Values : The Secret Seven,Enid Blyton,2010,function() {
//     return `${this.title} written by ${this.author}`;
// },function(yr){
//     this.year=yr;
// },function(){
//     return `${this.title} published in ${this.year}`;
// }


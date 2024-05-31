// 1 - Create a variable called carName, assign the value Volvo to it.
// ------------------------------------------
// ----------------------------------


// এক্সপ্লেইন ঃ
// Variable create করার জন্য let use করি, এবং Variable এর নাম carName set করি ।
// তারপর value assaign করার জন্য assaignment operator use করি, and string type value add করার জন্য single cotetion use করি ।

// এক্সাম্পল ঃ 
// let carName = 'Volvo';
// console.log(carName);



// 2 - On one single line, declare three variables with the following names and values:
// ------------------------------------------
// ----------------------------------


// এক্সপ্লেইন ঃ 
// এখানে এক লাইনে তিনটা Variable create করার কথা বলা হয়েছে, যার Variable name and value দেওয়া আছে ।
// Variable create করার জন্য let use করি, তারপর Variable এর name and value বসিয়ে দেই, semicolon দিয়ে Variable close করি ।

// এক্সাম্পল ঃ 
// let firstName = "John"; let lastName = "Doe"; let age = 35;
// console.log(firstName, lastName, age);



// 3 - Use the correct assignment operator that will result in x being 50 (same as x = x * y).
// ------------------------------------------
// ----------------------------------


// এক্সপ্লেইন ঃ
// এখানে x and y এর value দেওয়া আছে আগুলুকে Variable এর মধ্যে store করি |

// এক্সাম্পল ঃ 
// let x = 10;
// let y = 5;

// x = x * y;
// console.log(x);



// 4 - Use comments to describe the correct data type of the following variables:
// ------------------------------------------
// ----------------------------------


// এক্সাম্পল ঃ 
// let length = 16; // data type number 
// let lastName = "Johnson"; // data type string

// const x = {
//   firstName: "John",  
//   lastName: "Doe"
// };    // data type object 



// 5 - Execute the function named myFunction.
// ------------------------------------------
// ----------------------------------


// এক্সপ্লেইন ঃ
// এইটা যদি আমরা terminal এ open করি তাইলে (ReferenceError: alert is not defined) লিখা আসে, কিন্ত যদি html file connected করি,
// তাইলে web page এ একটা alert massage আসে যাতে Hello World লিখা থাকে ।


// এক্সাম্পল ঃ 
// function myFunction() {
//     alert("Hello World!");
// }

// myFunction()



// 6 - Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
// ------------------------------------------
// ----------------------------------


// এক্সপ্লেইন ঃ
// First এ object create করার জন্য const use করি, then object name হিসেবে person লিখি, 
// assaign করার জন্য assaignment operator use করি, body লিখার জন্য curli bresis use করি ।
// তারপর key দেই and colon(:) দিয়ে value দেই । value গুলাকে separate করার জন্য coma(,) use করি ।

// এক্সাম্পল ঃ 
// const person = {
//     name: 'John',
//     age: 50
// }

// alert(person.name + ' is ' + person.age);




// 7 - The <button> element should do something when someone clicks on it. Try to fix it!
// ------------------------------------------
// ----------------------------------


// এক্সপ্লেইন ঃ
// এইগুলা হয়তো DOM দিয়ে করলে আরো ভালো হতো, এখনও যেহেতু DOM এ যাইনি তাই খুব একটা জানি ও না।, html file এ button সহ দেওয়া আছে ।

// এক্সাম্পল ঃ
// function handClick(){
//     alert('Hello World');
// }




// 8 - Array Related Question
// ------------------------------------------
// ----------------------------------

// 1. Alert the number of items in an array, using the correct Array property: 
// 2. Change the first item of Brand to "Ford".

// এক্সপ্লেইন ঃ
// Fst এ array এর মধ্যে কত গুলা items আছে তা বের করতে cars.length use করি । alert হিসেবে দেখাতে alert(cars.length) use করি ।
// Second এ array এর Fst item select করার জন্ন array এর নাম then square bracket এর মধ্যে index number use করি ।

// এক্সাম্পল ঃ 
// Fst one:
// const cars = ["Volvo", "Jeep", "Mercedes"];
// alert(cars.length);

// Snd one: 
// const Brand = ["Volvo", "Jeep", "Mercedes"]; 
// Brand[0] = "Ford";
// console.log(Brand);



// 9 - Math Related Problems
// ------------------------------------------
// ----------------------------------


// এক্সাম্পল ঃ 

// 1. Use the correct Math method to create a random number.
let randomNum = Math.random();
console.log(randomNum);

// 2. Use the correct Math method to return the largest number of 10 and 20.
let maxiumNum = Math.max(10,20);
console.log(maxiumNum);

// 3. Use the correct Math method to get the square root of 9.
let squareRoot = Math.sqrt(9);
console.log(squareRoot);



// 10 - comparison operator related problems! 
// ------------------------------------------
// ----------------------------------


// 1. Choose the correct comparison operator to alert true, when x is greater than y. x = 10; y = 5;

let x = 10;
let y = 5;
alert(x > y);

// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age = 17;

age < 18 ? alert('Too young') : alert('Old enough');
console.log(age);
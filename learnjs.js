// 1
console.log("Hello");
console.log("i am kishore ");

//create an alert box

window.alert("This is an alert box");

//create a prompt box

var userInput = window.prompt("Please enter your name: ");
console.log("User input: " + userInput);

//create a confirm box

var userConfirmed = window.confirm("Do you want to proceed? ");
console.log("User confirmed: " + userConfirmed);

document.getElementById("myH1").textContent = "Welcome to My Website";
document.getElementById("myP").textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, expedita.";



//---------------------------------------------------------------------
// 2
// Variables and Data Types
// variable = A container to stores a value.
//            behave as if it were the value it contains.

let age = 25;
let price=10.99;

console.log(age);
console.log(price);
console.log("you are "+ age +" years old");
console.log(`you are ${age} years old and price is ${price}`);

let name="Kishore";

console.log(`your name is ${name}`);
console.log(typeof name);
console.log(typeof age);

let online=true;
console.log(typeof online);
console.log(`Are you online :  ${online}`);


let fullName=`kinthada bala veera kishore`;
let yourAge=21;
let student=true;

document.getElementById("p1").textContent = `Your name is: ${fullName}`;
document.getElementById("p2").textContent = `${yourAge} years old ass`;
document.getElementById("p3").textContent = `in college: ${student}`;


//---------------------------------------------------------------------
// 3
// arithmetic operators = (values, variables, etc..) that perform common
//                        mathematical operations.
//                        + - * / % ++ --

// addition +
let x = 10;
let y = 5;
let result = x + y;
console.log(`The addition is: ${result}`);

// subtraction -
result = x - y;
console.log(`The subtraction is: ${result}`);

// multiplication *
result = x * y;
console.log(`The multiplication is: ${result}`);

// division /
result = x / y;
console.log(`The division is: ${result}`);

// modulus % (remainder)
result = x % y;
console.log(`The modulus is: ${result}`);

// increment ++
x++;
console.log(`The increment is: ${x}`);

// decrement --
y--;
console.log(`The decrement is: ${y}`);  

//exponentiation **
let base=2;
let exponent=3;
result=base**exponent;
console.log(`The exponentiation is: ${result}`);

//argumented assignment operators
//combined operators
let a=10;
a+=5; //a=a+5
console.log(`The combined addition is: ${a}`);
a-=3; //a=a-3
console.log(`The combined subtraction is: ${a}`);
a*=2; //a=a*2
console.log(`The combined multiplication is: ${a}`);
a/=4; //a=a/4
console.log(`The combined division is: ${a}`);
a%=3; //a=a%3
console.log(`The combined modulus is: ${a}`);
a**=3; //a=a**3
console.log(`The combined exponentiation is: ${a}`);

//---------------------------------------------------------------------

// 4
// how to accept user input 

//1.Easy way = window prompt()

// let username=window.prompt("Enter your name: ");
// console.log(username);

//2. professional way = HTML textbox

let username;

document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("text").value;
    document.getElementById("h1").textContent =`Hey ${username} 😘`;
    
}

//HTML chnanges
/* <body>
    <h1 id="h1">Hey...</h1>

    <label>username: </label>
    <input id="text"><br>
    <button id="mySubmit">submit</button>
    <script src="index.js"></script>
</body> */

//---------------------------------------------------------------------

// 5
// type conversion = changing the datatype of a value to another
//                   (strings, numbers, booleans )

let age = window.prompt("Enter your age: ");
//need to add this
age= Number(age);
age += 2;

console.log(age);

//---------------------------------------------------------------------
// 6
// const = a variable that can't be changed

const pi = 3.14;
let radius;
let circumference;

document.getElementById("button1").onclick = function() {
    radius=document.getElementById("myText").value;
    radius=Number(radius);
    circumference=2*pi*radius;
    document.getElementById("h1").textContent = `The circumference is: ${circumference}`;
}

//---------------------------------------------------------------------

// 7
//counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
decreaseBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}


//HTML

/* <body>
     <label id="countLabel">0</label>
     <div id="btnContainer">
        <button id="decreaseBtn" class="buttons">decrease</button>
        <button id="resetBtn" class="buttons">reset</button>
        <button id="increaseBtn" class="buttons">increase</button>
    </div>

    <script src="index.js"></script>
</body> */

//CSS

#countLabel{
    display: block;
    text-align: center;
    font-size: 10em;
    font-family: Helvetica;
}

#btnContainer{
    text-align: center;
}
.buttons{
    padding: 10px 20px;
    font-size: 1.5em;
    color: white;
    background-color: rgb(145, 25, 109);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.25s;
}
.buttons:hover{
    background-color:rgb(101, 15, 75)
}

//---------------------------------------------------------------------
// 10
// IF STATEMENT =if a condition is true, execute some code if not, do something else

let age =25;
if(age >= 18){
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// ELSE IF STATEMENT = if the first condition is false, check another condition

let time = 12;
if(time < 12){
    console.log("Good morning");
} else if (time < 18){
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}       

//---------------------------------------------------------------------
// 13
// SWITCH = can be an efficient replacement to many else if statements

let day =1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

let testscore=85;
let lettergrade;
switch(true){
    case (testscore >= 90):
        lettergrade="A";
        break;
    case (testscore >= 80):
        lettergrade="B";
        break;
    case (testscore >= 70):
        lettergrade="C";
        break;
    case (testscore >= 60):
        lettergrade="D";
        break;
    default:
        lettergrade="F";
}

console.log(`Your grade is ${lettergrade}`);

//---------------------------------------------------------------------
// 17
// logical operators = used to combine or manipulate boolean values
//                        && (logical AND)
//                        || (logical OR)
//                        ! (logical NOT)

// logical AND &&
const temp =25;
if(temp>0 && temp<30){
    console.log("The weather is nice");
}else{
    console.log("The weather is bad");
}
console.log(`The logical AND is: ${result}`);

// logical OR ||
const day = "Saturday";
if(day === "Saturday" || day === "Sunday"){
    console.log("It's the weekend");
}else{
    console.log("It's a weekday");
}
console.log(`The logical OR is: ${result}`);

// logical NOT !
const isRaining = false;
if(!isRaining){
    console.log("It's not raining, you can go outside");
}else{
    console.log("It's raining, better stay inside");
}
console.log(`The logical NOT is: ${result}`);
//------------------------------------------------------------------------
// 18
// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values and datatypes are equal)
// != not equal operator (compare if values are not equal)
// !== strict not equal operator (compare if values and types are not equal)

const PI = 3.14;

if(PI === "3.14"){
    console.log(`This is PI`);
}
else{
    console.log(`This is not PI`)
}

if(PI === 3.14){ //now 3.14 is a number, so it will be true
    console.log(`This is PI`);
}
else{
    console.log(`This is not PI`)
}

//--------------------------------------------------------------------------------
// 19
// while loop = repeat some code WHILE some codition is true

let username="";

while(username === "" || username === null){
    username = window.prompt(`Enter your name:`);
}
console.log(`hello ${username}`);

//---------------------------------------------------------------------
// 19
// do while loop = repeat some code ONCE, and then repeat it WHILE some condition is true

let username2="";

do{
    username2 = window.prompt(`Enter your name:`);
}while(username2 === "" || username2 === null);
console.log(`hello ${username2}`);

//---------------------------------------------------------------------
// 20
// for loop = repeat some code a certain number of times

for(let i=1; i<=10; i++){
    console.log(i);
}

//---------------------------------------------------------------------
// 21
// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)+ minNum);

let attempts =0;
let guess;
let running = true;

while(running == true){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`That is not a number, please try again`);
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`That number is out of range, please try again`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`Too low, try again!`);
            }
        else if(guess > answer){
            window.alert(`Too high, try again!`);
        }
        else{
            window.alert(`CORRECT!! the answer was ${answer} and it took you ${attempts} attempts!`);
            running = false;
        }
    }

    
}

//------------------------------------------------------------------------
// 22
// function = A section of resuable code.
//            Declare code once, use it whenever you want.
//            call the fuction to run the code.

function happyBirthday(username, age){
    console.log("Happy Birthday to you...");
    console.log("Happy Birthday to you...");
    console.log(`happy Birthday dear ${username} ...`);
    console.log("Happy Birthday to you...");
    console.log(`You are now ${age} years old...`);
}
username= window.prompt("Enter your name: ");
age= window.prompt("Enter your age: ");
happyBirthday(username, age); //function call



function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
function div(x,y){
    return x/y;
}
function isEven(number){
    if(number % 2 == 0){
        return true;    
    }
    else{
        return false;
    }
}
function isValidEmail(email){
    if(email.includes("@") && email.includes(".")){
        return true;
    }
    else{
        return false;
    }
}

console.log(add(10,20));
console.log(sub(10,20));
console.log(mul(10,20));
console.log(div(10,20));
console.log(isEven(40));
console.log(isEven(41));
console.log(isValidEmail("kishore@gmail.com"));

//------------------------------------------------------------------------
// 23
// variable scope = where a variable is recognized 
//                  and accessible (local vs global)


//local scope
function function1(){
    let x=1;
    console.log(x);
}

function function2(){
    let x=2;
    console.log(x);
}

function1();
function2();

//global scope
let x=1;

function function3(){
    console.log(x);
}

function function4(){
    console.log(x);
}

function3();
function4();

//---------------------------------------------------------------------
// 25
// array = a variable like structure that can hold
//         more than 1 value


let fruits =["apple", "bananna", "orange"];

// add to an array at last position
fruits.push("coconut", "grapes", "mango");

// removes last element
fruits.pop(); 

// add to an array at first position
fruits.unshift("strawberry");

// removes first element
fruits.shift(); 

fruits[0]="green apple";

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// length of an array
let numOfFruits = fruits.length;
console.log(numOfFruits);

let index = fruits.indexOf("orange");
console.log(index);

// sort in alphabetical order

// fruits.sort();

// sort in reverse alphabetical order
fruits.sort().reverse();
for(let i=0;i<fruits.length; i++){
    console.log(fruits[i]);
}


//------------------------------------------------------------------------

// 30
// callback = a function that is passed as an argument to another function

//            used to handle asynchronous operations:
//            1. reading a file
//            2. network requests
//            3. interacting with a database

//            "Hey, when you are done with this task, please run this function for me"


hello(wait);
goodbye();
function hello(callback){
    console.log(`hello`);
    callback();
}

function wait(){
    console.log(`waiting...`);
}

function goodbye(){
    console.log(`goodbye`);
}




sum(displayPage, 5,10);

function sum(callback,x,y){
    let result = x+y;
    callback(result);
}

function displaySum(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myh1").textContent = result;
}

//HTML
<body>
    <h1 id="myh1"></h1>
    <script src="index.js"></script>
</body>

//-------------------------------------------------------------------------
// 31
// forEach() = method used to iterate over the elements 
//             of an array and apply a specified function (callback) 
//             to each element

//             array.forEach(callback)
//             elements, index, array are provided


let array = ["1", "2", "3", "4", "5"];

//array.forEach(double);
array.forEach(triple);
array.forEach(display);

function double(element, index, array){
        array[index]= element * 2;
}

function triple(element, index, array){
        array[index]= element * 3;
}

function display(element){
        console.log(element);
}





let fruits = ["apple", "banana", "grapes", "mango", "orange"];

fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index]= element.toUpperCase();
}

function capitalize(element, index, array){
    array[index]= element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}
 

//-------------------------------------------------------------------------

//32
// .map() = accepts a callback function and applies that functio to each 
//          element in an array and returns a new array with the results 

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
console.log(squares);

function square(element, index, array){
    return Math.pow(element,2);
}


const students =["kishore", "suresh", "ramesh", "sindhu", "sowmya"];

const upperCaseStudents = students.map(upperCase);
console.log(upperCaseStudents);

const lowerCaseStudents = students.map(lowerCase);
console.log(lowerCaseStudents);

function upperCase(element, index, array){
    return element.toUpperCase();
}

function lowerCase(element, index, array){
    return element.toLowerCase();
}



const dates =["2023-01-01", "2023-02-14", "2023-03-17", "2023-04-05"];


function formatdate(element, index, array){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const formattedDates = dates.map(formatdate);
console.log(formattedDates);

//-----------------------------------------------------------------------


// 33
// .filter() = creats a new array by filtering 
//             out elements

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNums = numbers.filter(isEven);
console.log(evenNums);
let oddNums = numbers.filter(isOdd);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}


const ages =[18, 22, 15, 30, 25, 17, 19, 60];

const adults = ages.filter(isAdult);
console.log(adults);
const children = ages.filter(isChild);
console.log(children);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}

const words = ["hello", "kishore", "king", "ayush", "function"];

const shortWords = words.filter(getShortWords);
console.log(shortWords);
const LongWords = words.filter(getLongWords);
console.log(LongWords);

function getShortWords(element){
    return element.length <= 5;
}

function getLongWords(element){
    return element.length > 5;
}

//--------------------------------------------------------------------------------

// 34
// .reduce() = reduce the elements of an array 
//             to a single value


const prices =[5, 10, 15, 20, 25];
const total = prices.reduce(totalPrice);
console.log(`$${total}`);

function totalPrice(accumulator, elements){
    return accumulator + elements;
}



const grades = [87, 64, 96, 72, 88, 78, 77];

const maxGrade = grades.reduce(getMax);
console.log(`Maximum grade is: ${maxGrade}`);
const minGrade = grades.reduce(getMin);
console.log(`Minimum grade is: ${minGrade}`);

function getMax(accumulator, elements){
    return Math.max(accumulator, elements); 
}

function getMin(accumulator, elements){
    return Math.min(accumulator, elements); 
}

//-------------------------------------------------------------------------
// 35
// function declaration = define a resuable block of code
//                        that performs a specific task


// function expression = a way to define functions as 
//                       values or variables

//  1. Callback in asynchronous operations
//  2. Higher-order functions
//  3. closures
//  4. Event Listeners

const hello = function(){
    console.log("Hello");
}

hello();


setTimeout(function(){
    console.log("Hello after 3 seconds");
}, 3000)


const numbers =[1,2,3,4,5];

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares);


const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
console.log(cubes);



const evenNumbers = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(evenNumbers);



const total =numbers.reduce(function(accumulator, element){
    return accumulator + element;
});
console.log(total);

//-------------------------------------------------------------------------

// 36
// arrow function = a concise way to write function expressions
//                  good for simple functions that you use only once
//                  (parameters) => some code



// using function expression
setTimeout(function(){
    console.log("Hello world");
},3000);

// using arrow function
setTimeout( () => console.log("Hello kishore"), 3000);

// using arrow function with parameters
const numbers = [1,2,3,4,5];


// using map with arrow function 
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);


// using filter with arrow function

// function isEven (element){
//     return element % 2 === 0;
// }
// const evenNumbers = numbers.filter(isEven);           // function decelaration
// console.log(evenNumbers);


// const evenNumbers = numbers.filter(function(element){
//     return element % 2 === 0;                               // function expression       
// });
// console.log(evenNumbers);

const evenNumbers = numbers.filter((element) => element % 2 === 0);
console.log(evenNumbers);

const oddNumbers = numbers.filter((element) => element % 2 !== 0);
console.log(oddNumbers);


// using reduce with arrow function

// function total(accumulator, element){
//     return accumulator + element;             // function decelaration
// }
// const sum = numbers.reduce(total);
// console.log(sum);


// const sum = numbers.reduce(function(accumulator, element){
//     return accumulator + element;                                //function expression
// });
// console.log(sum);


const sum = numbers.reduce((accumulator, element) => accumulator + element);
console.log(sum);


//---------------------------------------------------------------------

// 37
// object = A collection of related properties and/or methods
//          can represent real world objects (people, products, place)
//          object = {key:value,
//                    function()}

const person1 = {
    firstName: "kishore",
    lastName: "bala veera",
    age: 25,
    isEmployed: false,
    sayHello: function(){console.log("hey i am " + this.firstName)},
    eat: function(){console.log("i am eating pulihora")},
}

const person2 = {
    firstName: "john",
    lastName: "doe",
    age: 30,
    isEmployed: true,
    sayHello: () => console.log(`hello ${person2.firstName}`),
    eat: () => console.log("i am eating pulihora"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello();

person1.eat();
person2.eat();

//-------------------------------------------------------------------------

// 38
// this =  reference to this object where THIS is used
//         (the object depends on the immediate context)
//         person.name = this.name

const person1 = {
    firstName: "kishore",
    lastName: "bala veera",
    age: 25,
    isEmployed: false,
    favFood: "pulihora",
    sayHello: function(){console.log(`hello my name is ${this.firstName}`)},
    eat: function(){console.log(`${this.lastName} ${this.firstName} is eating ${this.favFood}`)},
}

const person2 = {
    firstName: "sai",
    lastName: "kumar",
    age: 30,
    isEmployed: true,
    favFood: "biryani",
    sayHello: function(){console.log(`hello my name is ${this.firstName}`)},
    eat: function(){console.log(`${this.lastName} ${this.firstName} is eating ${this.favFood}`)},
}

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();

//---------------------------------------------------------------------------------

// 39
// CONSTRUCTORS = special method for defining the 
//                properties and methods of object



function person(name, age, city, isEmployed){
    this.name = name;
    this.age = age;
    this.city = city;
    this.isEmployed = isEmployed;
    this.sayHello = function(){console.log(`hello, my name is ${this.name}`)};
}

let person1 = new person("kishore", 30, "chennai", true);

console.log(person1);
console.log(person1.name);


person1.sayHello(); 

//---------------------------------------------------------------------------------

// 40
// class = (ES6 feature) provides a more structured and cleaner way to work
//         with object compared to traditional constructor functions and prototypes
//         ex. static keyword, encapulsation, inheritance, etc.

// constructor function

// function Product(name, price){
//     this.name = name,
//     this.price = price,
//     this.display = function(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price}`);
//     }
// }

// let product1 = new Product("crop shirt", 499);
// product1.display();



class product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    
    display(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax); // Using the passed salesTax value
    }
}
const salesTax = 0.1; // Example sales tax rate (10%)

const product1 = new product("crop shirt", 499);
product1.display();
const total = product1.calculateTotal(salesTax);
console.log(total);

//---------------------------------------------------------------------------------

// 41
// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class own anything static, not the objects)

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }

    static getDefaultSalesTax() {
        return 0.08;
    }
}

class company{
    constructor(name, eSize){
        this.name = name;
        this.eSize = eSize;
    }
     static getDefaultCountry(){ //here static means that this method belongs to the class and not to the objects created from the class. So we can call this method without creating an instance of the class.
        return "India";
    }
    getCountry (){
        return "usa";
    }
}

const company1 = new company("Google", 100000);
console.log(company1.name);
console.log(company1.eSize);
console.log(company.getDefaultCountry());
console.log(company1.getCountry());


class MathUtil{

    static PI = 3.14;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return radius * 2 * this.PI;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));


class user{
    static usercount=0;
    constructor(username){
        this.username = username;
        user.countcount++;
    }
}

const user1 = new user("kishore");

console.log(user1.username);
// not work because of static 
console.log(user1.usercount);

console.log(user.usercount);


//---------------------------------------------------------------------------

// 71 
// Promise = An object that manages asynchronous operations.
//           Wrap a promise object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER 

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkTheDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked= true;

            if(dogwalked){
                resolve("Finished walking the dog");
            }else{
                reject("you forgot to walk the dog");
            }

        },1500);
    });
}

function cleanThekitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchencleaned = true;

            if(kitchencleaned){
                resolve("Finished cleaning the kitchen");
            }else{
                reject("you forgot to clean the kitchen");
            }

        },2500);
    });
}

function takeOutTheTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = false; 

            if(trashTakenOut){
                resolve("Finished taking out the trash");
            }else{
                reject("you forgot to take out the trash");
            }

        },500);
    });
}


walkTheDog().then(value => {console.log(value); return cleanThekitchen()})
            .then(value => {console.log(value); return takeOutTheTrash()})
            .then(value => {console.log(value); console.log("All chores are done!")})
            .catch(error => console.log(error));


//---------
function takePreworkout(){
    return new Promise((resolve, reject) => {

        setTimeout (() => {

            const preTaken = true;

            if(preTaken){
                resolve(`Preworkout taken!`);
            }else{
                reject(`Preworkout not taken!`);
            }
        },500);
    });
}

function goToGym(){

    return new Promise((resolve,reject) => {

        setTimeout(() => {

            const gymDone = true;

            if(gymDone){
                resolve(`GYM DOne!!`);
            }else{
                reject(`GYM not done, MOVE YOUR ASS AND GO`)
            }
        },3000);
    });
}

function completeSteps(){
    return new Promise((resolve, reject) => {

        setTimeout(()=> {
            const stepsCompleted = false;

            if (stepsCompleted){
                resolve(`10K steps completed!, well done`);
            }
            else{
                reject(`Today steps not completed!, go and walk kishore`)
            }
        },3000);
    });
}

takePreworkout().then(value => {console.log(value); return goToGym()})
                .then(value => {console.log(value); return completeSteps()})
                .then(value => {console.log(value)})
                .catch(error => {console.log(error)});
            
//--------------------------------------------------------------------------

// 72
// Async/Await = Async = makes a function return a Promise
//               Await = makes a async function wait for a Promise

//               Allows you write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue

function walkTheDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked= true;

            if(dogwalked){
                resolve("Finished walking the dog");
            }else{
                reject("you forgot to walk the dog");
            }

        },1500);
    });
}

function cleanThekitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchencleaned = true;

            if(kitchencleaned){
                resolve("Finished cleaning the kitchen");
            }else{
                reject("you forgot to clean the kitchen");
            }

        },2500);
    });
}

function takeOutTheTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = false; 

            if(trashTakenOut){
                resolve("Finished taking out the trash");
            }else{
                reject("you forgot to take out the trash");
            }

        },500);
    });
}

async function doChores(){

    try{
        const dog = await walkTheDog();
        console.log(dog);

        const kitchen = await cleanThekitchen();
        console.log(kitchen);

        const trash = await takeOutTheTrash();
        console.log(trash);

        console.log("Finished all chores");
    }
    catch(error){
        console.log(error);
    }

}

doChores();

//------

function takePreworkout(){
    return new Promise((resolve, reject) => {

        setTimeout (() => {

            const preTaken = true;

            if(preTaken){
                resolve(`Preworkout taken!`);
            }else{
                reject(`Preworkout not taken!`);
            }
        },500);
    });
}

function goToGym(){

    return new Promise((resolve,reject) => {

        setTimeout(() => {

            const gymDone = true;

            if(gymDone){
                resolve(`GYM DOne!!`);
            }else{
                reject(`GYM not done, MOVE YOUR ASS AND GO`)
            }
        },3000);
    });
}

function completeSteps(){
    return new Promise((resolve, reject) => {

        setTimeout(()=> {
            const stepsCompleted = false;

            if (stepsCompleted){
                resolve(`10K steps completed!, well done`);
            }
            else{
                reject(`Today steps not completed!, go and walk kishore`)
            }
        },3000);
    });
}

async function routine(){

    try{
        const preworkout = await takePreworkout();
        console.log(preworkout);

        const gym = await goToGym();
        console.log(gym);

        const walk = await completeSteps();
        console.log(walk);

    }catch(error){
        console.log(error);
    }
}

routine();

//-------------------------------------------------------------------------

// 73 
// JSON = (JavaScript Object Notation) data-intercharge format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object.

const names = ["kishore","suresh", "kumar", "raju", "rajesh", "ramesh", "suresh", "kishore", "kumar","ayush"];
const person = {"name": "kishore","age": 30,"city": "chennai","hobbies":["coding", "traveling", "cooking"]};


const jsonString = JSON.stringify(names);
const jsonPerson = JSON.stringify(person);

console.log(jsonString);
console.log(jsonPerson);






const jsonNames = `["kishore","suresh", "kumar", "raju", "rajesh", "ramesh", "suresh", "kishore", "kumar","ayush"]`;
const jsonPerson = `{"name": "kishore","age": 30,"city": "chennai","hobbies":["coding", "traveling", "cooking"]}`;
const jsonPeople = `[{"name": "kishore","age": 30,"city": "chennai"},
                {"name": "suresh","age": 28,"city": "bangalore"},
                {"name": "kumar","age": 32,"city": "hyderabad"},
                {"name": "raju","age": 25,"city": "chennai"},
                {"name": "rajesh","age": 29,"city": "bangalore"},
                {"name": "ramesh","age": 31,"city": "hyderabad"}]`;

const data = JSON.parse(jsonPeople);
console.log(data);


fetch("people.json")
    .then(response => response.json())
//    .then(value => console.log(value))
//    .then(values => values.forEach(value => console.log(value)))
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.log(error));



//--------------------------------------------------------------------------


// 74
// fetch = function used for making HTTP requests to fetch resources
//         (JSON style data, images, files)
//         Simplifies asychronus data fetching in javaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web
//         fetch(url, {options})



// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {

//         if(!response.ok){
//             throw new Error("Could not fetch data");
//         }else{
//             return response.json();
//         }
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.log(error));


async function fetchData(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        if(!response.ok){
            throw new Error("Could not fetch data");
        }
            const data = await response.json();
            console.log(data.name);

    }catch(error){
        console.log(error);
    }
}

fetchData();

//-------------------------------------------------------------------------

//js
async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch data");
        }
            const data = await response.json();
            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("PokemonSprite");

            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
    }catch(error){
        console.log(error);
    }
}

//html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>

//     <input type="text" id="pokemonName" placeholder="Enter Pokemon Name"> 
//     <button onclick="fetchData()">Fetch Pokemon</button><br>
//     <img src="" alt="Pokemon Sprite" id="PokemonSprite" style="display:none">

//     <script src="index.js"></script>
// </body>
// </html>

//------------------------------------------------------------------------------------


















































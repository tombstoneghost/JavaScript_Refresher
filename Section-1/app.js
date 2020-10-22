//Log to Console
console.log('Hello World');
console.log(123);
console.log(true);

let greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error("This is an Error");
console.clear();
console.warn("This is a warning");
console.time('Hello');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
console.timeEnd('Hello');

console.clear();
/*
* Multi Line Comments
*/

/*
* Declaring Variables
*
* There are three main type of keywords which are used to define a identifier:
*   1. var: global scope
*   2. let: block scope
*   3. const: block scope
*
*   We cannot reassign a value to a const type identifier
* */

let name = 'John Doe';
console.log(name);

name = 'Steve Smith';
console.log(name);

console.clear();
/*
* Init Var
*
* var greeting;
* console.log(greeting);
* greeting = 'Hello'
* console.log(greeting);*/

/*
* Variable names can contain letters, numbers, _, $ but it cannot start with a number
* */

const person = {
    firstName: 'John',
    age: 30
};

person.firstName = 'Sara';
person.age = 32;

//console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

//console.log(numbers);

/*
* Data Types in JavaScript
*
* There are two types of data types:
*   1. Primitive Data Types:
*       a. Stored directly in the location the variable access
*       b. Stored on the stack
*   2. Reference Data Types:
*       a. Accessed by reference
*       b. Objects that are stored on the Heap
*       c. A pointer to a location in memory
*
* Primitive Data Types:
*   1. Strings
*   2. Number
*   3. Boolean
*   4. Null
*   5. Undefined
*   6. Symbols(ES6)
*
* Reference Data Types:
*   1. Arrays
*   2. Object Literals
*   3. Functions
*   4. Dates
*   and anything else
*
* JavaScript is a Dynamically Typed Language
*
* Examples:
* //String
* const nameString = 'John Doe'
* //Number
* const age = 45;
* //Boolean
* const hasKids = true;
* //Null
* const car = null;
* //Undefined
* let test;
* //Symbol
* const sym = Symbol();
* //Array
* const hobbies = ['movies', 'music'];
* //Object Literal
* const address = {
*   city: 'Boston',
*   state: 'MA'
* };
* //Date
* const today = new Date();
* */


/*Type Casting*/
let valNew

//Number to String
valNew = String(5);
//Bool to String
valNew = String(true);
//Date to String
valNew = String(new Date());
//Array to String
valNew = String([1,2,3,4]);

//Using toString()
valNew = (5).toString();
valNew = true.toString();

//String to Number
valNew = Number('5');
//Boolean to Number
valNew = Number(true); //-> Returns 1 on true and 0 on false
//Null to Number
valNew = Number(null); //-> Returns NaN i.e. Not a Number

//Other functions
valNew = parseInt("100.30");
valNew = parseFloat("100.30");

/*Numbers and Math Objects*/
const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1,55, 6, 3, -2);
val = Math.max(2, 33, 4, 1,55, 6, 3, -2);
val = Math.random();

/*Strings*/
const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there, my name is Brad';

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += 'Traversy'

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//Escaping
val = 'That\'s awesome, I can\'t wait';

//Length
val = firstName.length;

//concat()
val = firstName.concat(' ', lastName);

//Change Case
val = firstName.toUpperCase();
val = lastName.toLocaleLowerCase();

val = firstName[0];

//indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt()
val = firstName.charAt(2);

//Get last char
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split()
val = str.split(' ');

//replace()
val = str.replace('Brad', 'Jack');

//includes()
val = str.includes('foo');

/*Template Literals*/
const newName = 'John';
const newAge = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

//Without Template Strings(es5)
html = '<ul><li>Name: ' + newName + '</li><li>Age: ' + newAge + '</li><li>Job: '
    + job + '</li><li>City: ' + city + '</li></ul>';

function hello() {
    return 'hello'
}

//With Template String(es6)
html = `
    <ul>
        <li>Name: ${newName}</li>
        <li>Age: ${newAge}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

console.log(html);

document.body.innerHTML = html;

/*Arrays*/

//Create some arrays
const numberArray = [43, 56, 33, 23, 44, 36, 5];
//const numberArrayNew = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a: 1, b: 1}, new Date()];

let valArray;

//Get array length
valArray = numberArray.length;

//Check is is Array
valArray = Array.isArray(numberArray);

//Get Single Value
valArray = numberArray[3];

//Insert into array
numberArray[2] = 100;

//Find index of value
valArray = numberArray.indexOf(36);

//Add on to end
numberArray.push(250);

//Add on to front
numberArray.unshift(120);

//Take off from end
numberArray.pop();

//Take off from front
numberArray.shift();

//Splice values
numberArray.splice(1, 3);

//Reverse
numberArray.reverse();

//Concatenate Array
valArray = numberArray.concat([12, 45, 67, 89]);

//Sorting Array
valArray = fruit.sort();
valArray = numberArray.sort();

//Use the 'compare function'
valArray = numberArray.sort(function (x, y) {
    return y - x;
});

//Find
function under50(num) {
    return num < 50;
}

valArray = numberArray.find(under50);

/*Object Literals*/

const newPerson = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function () {
        return 2017 - this.age;
    }
}

let objectVal;

objectVal = newPerson;

//Get Specific Value
objectVal = newPerson.firstName;
objectVal = newPerson['lastName'];
objectVal = newPerson.hobbies[1];
objectVal = newPerson.address.state;
objectVal = newPerson.address['city'];
objectVal = newPerson.getBirthYear();

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23}
];

for(let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

/*Date and Time*/
let dateVal;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');

dateVal = today
dateVal = birthday

dateVal = today.getMonth();
dateVal = today.getDate();
dateVal = today.getDay();
dateVal = today.getFullYear();
dateVal = today.getHours();
dateVal = today.getMinutes();
dateVal = today.getSeconds();
dateVal = today.getMilliseconds();
dateVal = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

/*Conditionals*/
const id = 100;

//Equal to
if(id === 100) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

//Not Equal to
if(id !== 101) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

if(id) {
    console.log(`The ID is ${id}`);
} else {
    console.log('No ID');
}

//Similarly we can use the other conditional operators as well.

let color = 'yellow'

if(color === 'red') {
    console.log('Color is red');
} else if(color === 'blue') {
    console.log('Color is blue');
} else {
    console.log('Color is not red or blue');
}

//We can also use the Logical Operators in the similar way.

//Ternary Operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

/*Switches*/
color = 'red';

switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

/*Functions*/

//Function Declaration
function greet(firstName, lastName) {
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('John', 'Doe'));

//Function Expression
const square = function (x = 3) {
    return x * x;
};

console.log(square());
console.log(square(8));

//Immediately Invokable Function Expression - IIFEs
(function (name) {
    console.log('Hello ' + name);
}) ('Brad');

//Property Methods
const todo = {
    add: function () {
        console.log('Add Todo');
    },
    edit: function (id) {
        console.log(`Edit Todo ${id}`);
    }
}

todo.delete = function () {
    console.log('Delete Todo');
};

/*Loops & Iterations*/

//For Loop
for(let i = 0; i < 10; i++) {
    if(i === 2) {
        console.log('2 is my favorite number');
        continue;
    }

    if(i === 5) {
        break;
    }

    console.log(i);
}

//While Loop
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

//Do While Loop -> This Loop will run at least once.
i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);

//For Each Loop
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

cars.forEach(function (car) {
    console.log(car);
});

//Map Function
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'}
];

const ids = users.map(function (user){
    return user.id;
});

/*Window Object*/

//Window Methods/Objects/Properties
console.log(123);

//Alert
window.alert('Hello World');

//Prompt
const input = prompt();
alert(input);

//Confirm
if(confirm('Are you sure')) {
    console.log('Yes');
} else {
    console.log('No');
}

let windowVal;

//Outer Height and Width
windowVal = window.outerHeight;
windowVal = window.outerWidth;

//Inner Height and Width
windowVal = window.innerHeight;
windowVal = window.innerWidth;

//Scroll Points
windowVal = window.scrollY;

//Location Object
windowVal = window.location;

//Redirect
//window.location.href="https://google.com";

//Reload
//window.location.reload();

//History
//window.history.go(-2);

//Navigator Object
windowVal = window.navigator;
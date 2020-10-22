/*Constructors and this keyword*/

/*Object Literal Example
const brad = {
    name: 'Brad',
    age: 30
}*/

/*Constructor -> When you want to use multiple instances of a type of object*/
//Person constructor
function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calculatedAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

//Creating instances of type Person
const brad = new Person('Brad', '9-10-1981');


/*Built-in Constructors*/

//String
const name1 = 'Jeff';
const name2 = String('Jeff');

if(name1 === 'Jeff') {
    console.log('YES');
} else {
    console.log('NO');
}

//Number
const num1 = 5;
const num2 = Number(5);

//Boolean
const bool1 = true;
const bool2 = Boolean(true);

//Functions
const getSum1 = function (x, y) {
    return (x + y);
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

//Objects
const john = {name: 'John'};
const john2 = new Object({name: 'John'});

//Arrays
const arr1 = [1,2,3,4];
//const arr2 = new Array(1,2,3,4);

//Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

/*Prototypes*/

//Person constructor
function Person2(firstName,lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = new Date(dob);
    this.calculatedAge = function () {
        const diff = Date.now() - this.birthdate.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

//Calculate Age
Person2.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthdate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get full name
Person2.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

//Gets Married
Person2.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
}

const john3 = new Person2('John', 'Doe', '8-12-90');
const mary = new Person2('Mary', 'Johnson', 'March 20 1987');

console.log(john3.calculateAge());
console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());

/*Prototype Inheritance*/
//Person constructor
function Person3(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person3.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person3('John', 'Doe');

//Customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person3.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

//Inherit the person prototype methods
Customer.prototype = Object.create(Person3.prototype);

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

//Customer Greeting
Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

/*Object.create functions*/
const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
}

const mary2 = Object.create(personPrototypes);
mary2.firstName = 'Mary';
mary2.lastName = 'Williams';
mary2.age = 30;

mary2.getsMarried('Thompson');

const brad1 = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 36}
});

/*ES6 Classes*/
class Person4 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName}  ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const mary3 = new Person4('Mary', 'Williams', '11-13-1980');
mary3.getsMarried('Thompson');

console.log(Person4.addNumbers(1, 2));

/*Subclasses*/
class Person5 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

//Customer2 is a SubClass of Person5
class Customer2 extends Person5 {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john4 = new Customer2('John', "Doe", '555-555-5555', 'Standard');
/*Iterators & Generators*/
//Iterator Example
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < names.length ? { value: name[nextIndex++], done: false} : {done: true}
        }
    }
}

//Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];

//Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);

//Generator Example
function* sayNames() {
    yield 'Jack';
    yield 'Jill';
    yield 'John';
}

const name = sayNames();

console.log(name.next());

/*Symbols*/
//Create Symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

//No two symbols can be same

//Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';

console.log(myObj[KEY1]);

//Symbols are not enumerable
//Symbols are ignored by json.Stringify()

/*Destructuring*/
let a,b;
[a,b] = [100, 200];

console.log(a);

//Rest pattern
[a,b,c, ...rest] = [100, 200, 300, 400, 500];

console.log(c);

//Array Destructuring
const people = ['John', 'Beth', 'Mike'];
const [p1, p2, p3] = people;

console.log(p1, p2, p3);

//Object Destructuring
const person = {
    name2: 'John Doe',
    age: 31,
    city: 'Miami'
}

const {name2, age, city} = person;

/*Maps
*
* Key-Value pairs that can use ANY type as a key or value*/

const map1 = new Map();

//Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function () {};

//Set map value to key
map1.set(key1, 'value 1');
map1.set(key2, 'value 2');
map1.set(key3, 'value 3');

//Get values by key
console.log(map1.get(key1));

//You can simply iterate over the map and perform the desired function

//Covert to array from map values
const keyValArr = Array.from(map1.values()); //For keys replace .values() with .keys()
console.log(keyValArr);

/*Sets
*
* Store Unique values of any type*/

const set1 = new Set();

//Add values to set
set1.add(100);
set1.add('A String');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);

console.log(set1);

//There are many functions on sets to check for and also you can loop through a set.
//Conversion to a Array is similar as its with maps
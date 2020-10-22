/*DOM -> Document Object Model
*   It is the tree of nodes/elements which are created by the browser.
*   JS can be used to read/write/manipulate to the DOM
*   Object Oriented Representation*/

/*Examining the document*/
let val;

val = document;
val = document.links;

let scripts = document.scripts;
let scriptArr = Array.from(scripts);

scriptArr.forEach(function (script) {
    console.log(script.getAttribute('src'));
});

console.log(val);

/*DOM selectors*/

//Get things from element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//Change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';

//Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

//Query Selection
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));

document.querySelector('li').style.color = 'red';

/*Remove and Replace*/

//Create Element
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';

//New Text Node
newHeading.appendChild(document.createTextNode('Task List'));

//Get Old Heading
const oldHeading = document.getElementById('task-title');

//Parent
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading);

//Remove
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[3]);

/*Classes and Attributes*/
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];

link.classList.add('test');
link.classList.remove('test');

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com/');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');

/*Event Listeners and Event Objects*/
document.querySelector('.clear-tasks').addEventListener('click', function (e) {
    console.log('Hello World');

    e.preventDefault();
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    let val;
    val = e;

    //Event Target Element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    //Event Type
    val = e.type;

    //Timestamp
    val = e.timestamp;

    //Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    e.target.innerHTML = 'Hello';

    console.log(val);
}

/*Event Bubbling*/
document.querySelector('.card-title').addEventListener('click', function () {
    console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', function () {
    console.log('card content');
});

//Event Delegation
//const delItem = document.querySelector('.delete-item');

//delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    console.log('delete item');

    if(e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}

/*Local and Session Storage*/
//Local Storage
localStorage.setItem('name', 'John');

const name = localStorage.getItem('name');
console.log(name);

localStorage.removeItem('name');

localStorage.clear();

//Session Storage
sessionStorage.setItem('name', 'Beth');

document.querySelector('form').addEventListener('submit', function (e) {
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('task', JSON.stringify(tasks));
    alert('Task saved');

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
    console.log(task);
});

/*Mouse Events*/
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click
//clearBtn.addEventListener('click', runEvent);
//DoubleClick
//clearBtn.addEventListener('dblclick', runEvent);

card.addEventListener('mousemove', runMouseEvent);

//There are a lot of mouse events to try

//Event Handler
function runMouseEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40`;
}

/*Keyboard Events*/
const form = document.querySelector('form');
const taskInput = document.getElementById('task');

//Clear Input
taskInput.value = '';

form.addEventListener('keydown', runKeyboardEvent);

function runKeyboardEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    //Get value input
    heading.innerText = e.target.value;
}
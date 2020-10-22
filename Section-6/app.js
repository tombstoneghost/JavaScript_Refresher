/*XHR Objects Methods & Working with Text*/
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    //Create an XHR Object
    const xhr = new XMLHttpRequest();

    //Open
    xhr.open('GET', 'data.txt', true);

    //Optional for Progress Spinner
    xhr.onprogress = function () {
        console.log('Ready State', xhr.readyState);
    }

    xhr.onload = function () {
        console.log('Ready State', xhr.readyState);
        if(this.status === 200) {
            //console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    /*
    * Ready State Values:
    *   0: Request not initialized
    *   1: Server connection established
    *   2: Request Received
    *   3: Processing Request
    *   4: Request finished and response is ready

    xhr.onreadystatechange = function () {
        if(this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
        }
    }*/

    xhr.send();
}

/*Working with Ajax & JSON*/
document.getElementById('button1').addEventListener('click', loadCustomer);

//Load Customer
function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if(this.status === 200) {
            const customer = JSON.parse(this.responseText);

            document.getElementById('customer').innerHTML = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>`;
        }
    }

    xhr.send();
}

document.getElementById('button2').addEventListener('click', loadCustomers)

//Load Customers
function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
        if(this.status === 200) {
            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function (customer){
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>`;
            });

            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();
}

/*Getting data from external API*/
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;
    console.log(number);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);

            let output = '';
            if(response.type === 'success') {
                response.value.forEach(function (joke) {
                    output += `<li>${joke.joke}</li>`;
                })
            } else {
                output += '<li>Something went wrong</li>'
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}

/*Callback functions*/
const posts = [
    {
        title: 'Post One', body: 'This is post one'
    },
    {
        title: 'Post Two', body: 'This is post two'
    }
];

function createPost(post, callback) {
    console.log(post);
    setTimeout(function () {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('posts').innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);



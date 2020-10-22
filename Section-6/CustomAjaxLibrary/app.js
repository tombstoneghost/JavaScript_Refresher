const http = new easyHTTP();

//GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
    if(err) {
        console.log(err);
    } else {
    console.log(posts);
    }
});

//Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom body'
};

//Create Post
http.post('http://jsonplaceholder.typicode.com/posts', data, function (err, post) {
    if(err) {
        console.log(err);
    } else {
        console.log(post);
    }
});

//Update Post
http.put('http://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
    if(err) {
        console.log(err);
    } else {
        console.log(post);
    }
})

//Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, respose) {
    if(err) {
        console.log(err);
    } else {
        console.log(respose);
    }
});

/*ES6 Promises
function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);

            const error = true;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(err) {
    console.log(err);
};
*/


/*Fetch API

function gettext() {
    fetch('test.txt')
        .then(function (res) {
            console.log(res.text());
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (err) {
            console.log(err);
        });
    }*/

/*Arrow Functions

const sayHello = (name) => {
    console.log('Hello ', name);
}

const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map(name => name.length);*/

/*Task: Convert all the above functions in Arrow Functions and Promises*/

/*Async & Await*/
async function myFunc() {
    //return 'Hello';

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 1000);
    });

    const error = true;

    if(!error) {
        return await promise;
    } else {
        await Promise.reject(new Error('Something went wrong'));
    }
}

myFunc()
.then(res => console.log(res))
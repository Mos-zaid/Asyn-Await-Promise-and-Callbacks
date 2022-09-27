posts = [
    {title: "First Post", content: "This is the first post"},
    {title: "Second Post", content: "This is the second post"}
]

newPost = {title: "last Post", content: "This is the last post"}


function getPost() {
    let content = ''
    setTimeout( ()=>{
        posts.forEach( post =>{
            content += `<li>${post.content}</li>`
        })
        document.body.innerHTML = content
    }, 1000)
}


//  CALLBACK
/**
function createPost(post, callback){
    setTimeout( ()=>{
        posts.push(post)
        // You call the callback in the function
        callback()
        console.log(posts)
    }, 5000)
}

createPost(newPost, getPost)

**/


// PROMISES

/**

function createPost(post) {
    return new Promise ( (resolve, reject) => {
           setTimeout( ()=>{
                posts.push(post)
                // You resolve this in the function
                resolve()
                console.log(posts)
            }, 5000)
        })
}

createPost(newPost).then(getPost)

**/

// ASYNC / AWAIT

/**

function createPost(post) {
    return new Promise ( (resolve, reject) => {
           setTimeout( ()=>{
                posts.push(post)
                // You resolve this in the function
                resolve()
                console.log(posts)
            }, 5000)
        })
}

async function test() {
    await createPost(newPost)
    getPost()
}

test()

**/
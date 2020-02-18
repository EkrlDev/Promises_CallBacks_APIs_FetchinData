const posts = [
    {title: 'Post One', body:'This is Post One'},
    {title: 'Post Two', body:'This is Post Two'}  
]

function getPost () {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
    document.body.innerHTML = output;
    }, 1000);
}

function createPost (post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: 'Post Three', body:'This is Post Three'}, getPost);

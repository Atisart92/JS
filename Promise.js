const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('got the user');
        reject(new Error("User not logged in"));
    }, 2000);
});

promise 
    .then(user=>{
    console.log(user);
    })
    .catch (err => console.log(err.message));
console.log('Start');

function loginUser (email, password, callback){
    setTimeout (()=>{
        console.log("Now we have the data");
        callback({userEmail: email});
    }, 5000)
}

function getUserVideos(email, callback){
    setTimeout(()=>{
        callback(['video1', 'video2', 'video3']);
    }, 2000);
}

function videoDetails(video, callback){
    setTimeout(()=>{
        callback(['Title of the Video']);
    }, 2000);
}

const user = loginUser("atisart92@gmail.com", 123456, user=>{
    console.log(user);
    getUserVideos(user.userEmail, videos=>{
        console.log(videos);
    videoDetails(videos[0], title=>{
        console.log(title)
    });
    });
});

console.log('End');
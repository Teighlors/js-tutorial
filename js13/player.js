const videoPlayer = document.getElementById("video-player"); 
const playButton = document.getElementById("play-button"); 
const pauseButton = document.getElementById("pause-button"); 
const stopButton = document.getElementById("stop-button"); 
const volumeControl = document.getElementById("volume-control");
const timeElapsed = document.getElementById("time-elapsed"); 


playButton.addEventListener("click", () => {     
    videoPlayer.play(); 
});     
pauseButton.addEventListener("click", () => {     
    videoPlayer.pause();
});
stopButton.addEventListener("click", () => { 
    videoPlayer.pause();     
    videoPlayer.currentTime = 0; 
});
volumeControl.addEventListener("input", (e) => {
    videoPlayer.volume = e.target.value; 
});
videoPlayer.addEventListener("timeupdate", () => {     
    let minutes = Math.floor(videoPlayer.currentTime / 60);     
    let seconds = Math.floor(videoPlayer.currentTime % 60);    
    timeElapsed.innerHTML = `${minutes}:${seconds}`; 
});




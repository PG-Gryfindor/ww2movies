const audio = document.getElementById("audio");
const playStopSpan = document.getElementById("play-stop");

let count = 0;

function playStop() {
    if  (count == 0) {
        count = 1;
        audio.pause();
        playStopSpan.innerHTML = "music_off";

    }else{
        count = 0;
        audio.play();
        playStopSpan.innerHTML = "music_note";
    }
};
    


// function stopAudio() {
//     audio.classList.remove("open-popup")
// }
const mymusic = new Audio();
let random = Math.floor(Math.random() * 11)
mymusic.src = `https://rohandas28.github.io/lofi-player/music/${random}.mp3`;
// mymusic.src = `/music/${random}.mp3`; // For local system


var button = document.getElementById("button_1");
const rangechange = (val) =>{
  var k = val/10
  mymusic.volume = k 
}

button.addEventListener("click", function(){
  if(mymusic.paused){
    mymusic.play();
    
    button.className = "fa-solid fa-pause fa-beat";
  } else {
    mymusic.pause();
    button.className = "fa-solid fa-play fa-beat";
  }
});

setInterval(() =>{
  fetch("https://api.quotable.io/random").then(data => data.json()).then(quotes => {
            let ele = document.getElementById("quote");
            const quote = quotes.content;
            ele.innerHTML = quote;

        });

},10000)

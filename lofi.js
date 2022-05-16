const mymusic = new Audio();
mymusic.src = "./music/1.mp3";

var button = document.getElementById("button_1");
button.addEventListener("click", function(){
  if(mymusic.paused){
    mymusic.play();
    mymusic.volume=.5;
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

},10000
)


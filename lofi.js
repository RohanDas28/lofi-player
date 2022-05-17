const mymusic = new Audio();
mymusic.src = "https://rohandas28.github.io/lofi-player/music/1.mp3";

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

},10000
)

// let sliderValue = document.getElementById("myRange");

// sliderValue.oninput = function() {
//   let k =("0." + (sliderValue.value%10))
//   k  =parseInt(k)
//   console.log(k)
//   console.log("0." + sliderValue.value%10)
// }
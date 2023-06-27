var img = document.getElementById("popcat1");
var count = document.getElementById("score");
var score = 0;
var MyScore = 10000;
var audio = new Audio('pop.mp3');

// mouseclick event
img.addEventListener("mousedown", function(){
    increaseScore();
    img.src = 'p.jpg';
    audio.play();
});
    
img.addEventListener("mouseup", function(){
    img.src = 'np.jpg';
    audio.play();
});

// touch event
img.addEventListener("touchstart", function(){
    increaseScore();
    img.src = 'p.jpg';
    audio.play();
});

img.addEventListener("touchmove", function(){
    img.src = 'np.jpg';
    audio.play();
});

function increaseScore(){
    score++;
    MyScore++;
    count.innerHTML = score;
}

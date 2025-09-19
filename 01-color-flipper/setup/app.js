const log = console.log;
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

 btn.addEventListener('click', function(){
    let randomNumber = tirage(); 
    log(randomNumber); 
    let randomColor = colors[randomNumber];
    log(randomColor);
    color.textContent=randomColor;
    document.body.style.background = randomColor;
}) 

 function tirage(){
    return Math.floor(Math.random()*4);
}


//log(Math.floor(Math.random()*4));


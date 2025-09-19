const log = console.log;
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

//Tirage au hasard 1 parmi 16, 6 fois
//log(randomNumber);
let nbreHex;

function randomHexa (){
nbreHex= '#';
for(i =0; i < 6; i++){
    let randomNumber = hex[Math.floor(Math.random()*hex.length)];
    nbreHex = nbreHex + randomNumber;
}
log(nbreHex);
return nbreHex;
}

btn.addEventListener('click', function(){
    randomHexa();
    document.body.style.backgroundColor = nbreHex;
    color.textContent = nbreHex;
})
const log = console.log;

const counter = document.querySelector('#value');
let compteur = counter.textContent;

const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const decrease = document.querySelector('.decrease');

increase.addEventListener('click', function(){
    compteur = parseInt(compteur);
    compteur +=1;
    affiche();
});

decrease.addEventListener('click', function(){
    compteur = parseInt(compteur);
    compteur -=1;
    affiche();
});

reset.addEventListener('click', function(){
    //compteur = parseInt(compteur);
    compteur = 0;
    affiche();
});

function affiche (){
    log(compteur);
    counter.textContent = compteur;
    if(compteur > 0){counter.style.color = 'green'}
    else if(compteur < 0) {counter.style.color = 'red'}
    else {counter.style.color = 'black'};
}



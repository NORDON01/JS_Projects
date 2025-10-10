const log =console.log;
const btns = document.querySelectorAll('.tab-btn');/* Les boutons*/
log(btns);
const about = document.querySelector('.about'); /* Grille des boutons */
log(about);
const articles = document.querySelectorAll('.content'); /* Les articles */

about.addEventListener('click', function(evt){
    log(evt.target.dataset);          /* L'objet événement */  
    log(evt.target.dataset.id);       /*target est nécessairementl'un des 3 boutons*/
    const id = evt.target.dataset.id; /*l'id précise lequel des trois*/
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active');/* La classe active est supprimée */
            evt.target.classList.add('active');/* Seul le bouton clické est actif */
        })
     articles.forEach(function(article){
        article.classList.remove('active');
        const element = document.getElementById(id);
        element.classList.add('active');
     })   
    }
})
const log = console.log;

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    /* Rechercher le bouton de la seule question (!= document): */
   const btn = question.querySelector('.question-btn');
   /* Ajouter un écouteur à ce seul bouton */
   btn.addEventListener('click', function(){
    /* Parcourir à nouveau la liste des questions (items) */
   questions.forEach(function(item){
    /* Comparer chaque item à la question qui reçoit l'écouteur */
    if(item !== question){
    item.classList.remove('show-text')}
    else {question.classList.toggle('show-text')}
   })
   })
})



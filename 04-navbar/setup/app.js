// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const log = console.log;

const links = document.querySelector('.links');
const hamburger = document.querySelector('.nav-toggle');

 /*    hamburger.addEventListener('click', function(){
    if(liste.classList.contains('show-links')){
        liste.classList.remove('show-links')
    }else{liste.classList.add('show-links')}
}) */

           /*  OU */
            
    hamburger.addEventListener('click', function(){
        links.classList.toggle('show-links');            
        log(links.classList);
    })
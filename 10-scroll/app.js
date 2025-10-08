// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

const log =console.log;
// ********** set date ************
let dateJour = new Date();
let an = dateJour.getFullYear();
log(an);
const dateCopyRight = document.getElementById('#date');
dateCopyRight.innerHTML = `date: ${an}`;

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    /* linksContainer.classList.toggle("show-links"); Version Statique */
    /* Version Dynamique: */
    
    const containerHeight = linksContainer.getBoundingClientRect().height;
    log(containerHeight);   /* 0 */
    const linksHeight = links.getBoundingClientRect().height;
    log(linksHeight);   /* 201.5833 */
    
    if(containerHeight === 0){linksContainer.style.height = `${linksHeight}px`;}
    else {linksContainer.style.height = 0;}
    
})

// ********** fixed navbar ************
const navbar = document.querySelector('#nav');/* <nav> tout en haut du HTML */
log(navbar);
const topLink = document.querySelector('.top-link'); /* <a> tout en bas */
log(topLink)

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset; //log(scrollHeight);
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){          /* Le bouton prend la position fixed */
        navbar.classList.add('.fixed-nav');
    }else{
        navbar.classList.remove('.fixed-nav');
    } 

    if(scrollHeight > 500){     /* Le bouton retour "HOME" devient visible */
        topLink.classList.add('show-link');
    }else{
        topLink.classList.remove('show-link');
    }
})

// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
//log(scrollLinks);
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(evt){
        evt.preventDefault();/* Bloque le déplacement vers l'adresse sélectionnée */
        //navigate to specific spot
        const id = evt.currentTarget.getAttribute('href').slice(1);     //Retire le '#'
        log('ID: '+ id);
        const element = document.getElementById(id);
        log(element);
        let position = element.offsetTop;
        log('Position:' + position);
        window.scrollTo({
            left:0,
            top:position
        })
        linksContainer.style.height=0;
    })
})
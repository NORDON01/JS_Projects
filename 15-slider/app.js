const log = console.log;

const slides = document.querySelectorAll('.slide');log(slides);
const nextBtn = document.querySelector('.nextBtn'); log(nextBtn);
const prevBtn = document.querySelector('.prevBtn'); log(prevBtn);

slides.forEach(function(slide, index){
    slide.style.left = `${index*100}%`;
})

let counter = 0;

nextBtn.addEventListener('click', function(){
    counter++; log('counter: ' + counter );
    carousel();
})

prevBtn.addEventListener('click', function(){
    counter--; log('counter: ' + counter );
    carousel();
})

function carousel(){
    log('counter: ' + counter);
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*100}%`;
    })
}
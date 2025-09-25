const log = console.log;

const btns = document.querySelectorAll('.question-btn');
log(btns);

btns.forEach(function(btn){
    btn.addEventListener("click", function(evt){
        log(evt.currentTarget);
        const question = evt.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    });
});


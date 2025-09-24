/* // select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay */
const log = console.log;

const modal = document.querySelector('.modal-overlay');
log(modal.classList);  
const modalBtn = document.querySelector('.modal-btn');
log(modalBtn);
const closeBtn = document.querySelector('.close-btn');
log(closeBtn);


modalBtn.addEventListener('click', function(){
    modal.classList.add('open-modal');
})

closeBtn.addEventListener('click', function(){
    modal.classList.remove('open_modal');
})
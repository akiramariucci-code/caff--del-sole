//Creo una variabile che trova il menu hamburger
const navToggleBtn = document.querySelector('.hb');
//Creo una variabile che trova il mio header
const header = document.querySelector('header');
//Creo un toggle che aggiunge magicamente una classe in base al click a navToggleBtn
navToggleBtn.addEventListener('click',function(){
    header.classList.toggle('active');
})

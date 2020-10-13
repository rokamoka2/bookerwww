// Mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');
const konyvekDropdown = document.querySelector('#konyvekDropdown');
const adminDropdown = document.querySelector('#adminDropdown');

burgerIcon.addEventListener('click' , () => {
    navbarMenu.classList.toggle('is-active');
});


// Menu dropdowns
konyvekDropdown.addEventListener('click' , () => {  
    konyvekDropdown.classList.toggle('is-active');
});

adminDropdown.addEventListener('click' , () => {  
    adminDropdown.classList.toggle('is-active');
});
// Mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');


burgerIcon.addEventListener('click' , () => {
    navbarMenu.classList.toggle('is-active');
});


// Menu dropdowns
const konyvekDropdownMenu = document.querySelector('#konyvekDropdownMenu');
const konyvekDropdown = document.querySelector('#konyvekDropdown');
const adminDropdown = document.querySelector('#adminDropdown');
const adminDropdownMenu = document.querySelector('#adminDropdownMenu');



konyvekDropdown.addEventListener('click' , () => {  
    konyvekDropdownMenu.classList.toggle('is-hidden');
    konyvekDropdown.classList.toggle('is-active');
});

adminDropdown.addEventListener('click' , () => {
    adminDropdownMenu.classList.toggle('is-hidden');  
    adminDropdown.classList.toggle('is-active');
});
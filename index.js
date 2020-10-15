// Mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');


burgerIcon.addEventListener('click' , () => {
    navbarMenu.classList.toggle('is-active');
});

//Modals
function closeModal(modalName) {
    var modal = document.querySelector('#' + modalName);
    modal.classList.remove('is-active');
}

function openModal(modalName) {
    var modal = document.querySelector('#' + modalName);
    modal.classList.add('is-active');
}

// Dropdown menus

function toggleDropdown(ddLink){
    var dd = document.querySelector('#' + ddLink).parentElement;
    dd.classList.toggle('is-active');
}
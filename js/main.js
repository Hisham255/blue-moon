// * general file for the website

// ! navbar start
var menuBtn = document.querySelector('#menuBtn');
var navMenu = document.querySelector('#navMenu');
var menuBtnIcon = document.querySelector('#menuBtnIcon');




menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle('open');
    navMenu.classList.contains('open') ? menuBtnIcon.setAttribute('icon', "carbon:close") : menuBtnIcon.setAttribute('icon', "eva:menu-outline");
});






























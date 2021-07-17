const hamburgerMenu = document.querySelector('.hamburger')
const navlinks = document.querySelector('.navlinks')

hamburgerMenu.addEventListener('click', ()=>{
    navlinks.classList.toggle("menu_toggle");
})
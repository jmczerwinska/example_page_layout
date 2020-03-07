const hamburgerBtn = document.getElementById('hamburger-btn');
const hamburgerMenu =document.getElementById('hamburger-menu');

hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hamburger-menu--show');
});

window.addEventListener('click', (e) =>  {
    if ( e.target !== hamburgerMenu
        && e.target.parentNode !== hamburgerMenu
        && e.target !== hamburgerBtn 
        && e.target.parentNode !== hamburgerBtn) {
        hamburgerMenu.classList.remove('hamburger-menu--show');
        }  
});
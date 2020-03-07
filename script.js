const hamburgerBtn = document.getElementById('hamburger-btn');
const hamburgerMenu =document.getElementById('hamburger-menu');

hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hamburger-menu--show');
});

window.addEventListener('click', (e) =>  {
    console.log("########")
    console.log(e.target.classList)
    const a = hamburgerMenu.classList.contains('hamburger-menu--show')
    const b = (e.target !== hamburgerMenu)
    const c = (e.target !== hamburgerBtn)
    console.log(`==> ${a} ${b} ${c}`)

    if ( e.target !== hamburgerMenu 
        && e.target !== hamburgerBtn 
        && e.target.parentNode !== hamburgerBtn) {
        hamburgerMenu.classList.remove('hamburger-menu--show');
    }
    
})
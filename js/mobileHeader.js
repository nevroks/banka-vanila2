$(function () {    
    const headerBurger = document.querySelector('.header-navigation-mobile-burger');    
    const headerNavigationModal = document.querySelector('.header-navigation-mobile-modal');
    
    
    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('open');
        headerNavigationModal.classList.toggle('opened');
    })
})



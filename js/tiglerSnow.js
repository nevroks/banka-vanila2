const snowOpen = document.querySelector('.modal-snow-open');
const snowClose = document.querySelector('.modal-snow-close');

snowOpen.addEventListener('click', () => {
    snowOpen.style.display = 'none'; 
    snowClose.style.display = 'block'; 
});

snowClose.addEventListener('click', () => {
    snowClose.style.display = 'none'; 
    snowOpen.style.display = 'block'; 
});
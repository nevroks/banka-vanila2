document.addEventListener("DOMContentLoaded", function() {
    const yellowStar = document.querySelector('.yellowStar');
    const redStar = document.querySelector('.redStar');
    const leftcookies = document.querySelector('.leftStarJoin');
    const rightcookies = document.querySelector('.righttStarJoin');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 1 
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(yellowStar);
    observer.observe(redStar);
});
document.addEventListener("DOMContentLoaded", function() {
    const leftcookies = document.querySelector('.leftStarJoin');
    const rightcookies = document.querySelector('.righttStarJoin');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 1 
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(leftcookies);
    observer.observe(rightcookies);
});
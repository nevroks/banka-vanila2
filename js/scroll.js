// let currentSection = 0; 
// let isScrolling = false; 
// let isScrollLocked = false; 
// const sections = document.querySelectorAll('section'); 
// const totalSections = sections.length;

// function smoothScrollTo(target) {
//     if (isScrollLocked) return; 

//     const startPosition = window.pageYOffset; 
//     const targetPosition = target; 
//     const distance = targetPosition - startPosition; 
//     const duration = 2000; 
//     let startTime = null;

//     function animation(currentTime) {
//         if (startTime === null) startTime = currentTime; 
//         const timeElapsed = currentTime - startTime;
//         const progress = Math.min(timeElapsed / duration, 1); 

//         const ease = easeOutCubic(progress);
//         window.scrollTo(0, startPosition + distance * ease); 

//         if (progress < 1) {
//             requestAnimationFrame(animation); 
//         } else {
//             isScrolling = false; 
//         }
//     }

//     function easeOutCubic(t) {
//         return (--t) * t * t + 1;
//     }

//     requestAnimationFrame(animation); 
// }

// function scrollToSection(index) {
//     if (index >= 0 && index < totalSections && !isScrolling) {
//         isScrolling = true; 
//         const section = sections[index];
//         const sectionTop = section.offsetTop; 
//         smoothScrollTo(sectionTop); 
//         currentSection = index; 

//         if ( currentSection === 2) {
//             console.log(true);
//             disableScroll(); 
//             isScrollLocked = true; 
//             setTimeout(() => {
//                 enableScroll(); 
//                 isScrollLocked = false; 
//             }, 5000);
//         }
//     }
// }

// function disableScroll() {
//     window.addEventListener('wheel', preventDefault, { passive: false });
//     window.addEventListener('touchmove', preventDefault, { passive: false });
//     window.addEventListener('scroll', preventDefault, { passive: false });
// }

// function enableScroll() {
//     window.removeEventListener('wheel', preventDefault);
//     window.removeEventListener('touchmove', preventDefault);
//     window.removeEventListener('scroll', preventDefault);
// }

// function preventDefault(event) {
//     event.preventDefault();
// }

// window.addEventListener('wheel', (event) => {
//     if (isScrolling || isScrollLocked) return; 

//     if (event.deltaY > 0) {
//         scrollToSection(currentSection + 1);
//     } else if (event.deltaY < 0) {
//         scrollToSection(currentSection - 1);
//     }
// });

// window.addEventListener('keydown', (event) => {
//     if (isScrolling || isScrollLocked) return; 

//     if (event.key === 'ArrowDown') {
//         scrollToSection(currentSection + 1);
//     } else if (event.key === 'ArrowUp') {
//         scrollToSection(currentSection - 1);
//     }
// });



let currentSection = 0; 
let isScrolling = false; 
let isScrollLocked = false; 
const sections = document.querySelectorAll('section'); 
const totalSections = sections.length;

function smoothScrollTo(target) {
    if (isScrollLocked) return; 

    const startPosition = window.pageYOffset; 
    const targetPosition = target; 
    const distance = targetPosition - startPosition; 
    const duration = 2000; 
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime; 
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); 

        const ease = easeOutCubic(progress);
        window.scrollTo(0, startPosition + distance * ease); 

        if (progress < 1) {
            requestAnimationFrame(animation); 
        } else {
            isScrolling = false; 
        }
    }

    function easeOutCubic(t) {
        return (--t) * t * t + 1;
    }

    requestAnimationFrame(animation); 
}

function scrollToSection(index) {
    if (index >= 0 && index < totalSections && !isScrolling) {
        isScrolling = true; 
        const section = sections[index];
        const sectionTop = section.offsetTop; 
        smoothScrollTo(sectionTop); 
        currentSection = index; 

        if (currentSection === 2 ) {
            isScrollLocked = true; 
            document.body.style.overflow = 'hidden'; 
        }
    }
}

function preventDefault(event) {
    event.preventDefault();
}

const observer = new MutationObserver(() => {
    if (document.body.style.overflow === '') {
        isScrollLocked = false; 
    }
});

observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['style']
});

window.addEventListener('wheel', (event) => {
    if (isScrolling || isScrollLocked) return; 

    if (event.deltaY > 0) {
        scrollToSection(currentSection + 1);
    } else if (event.deltaY < 0) {
        scrollToSection(currentSection - 1);
    }
});

window.addEventListener('keydown', (event) => {
    if (isScrolling || isScrollLocked) return; 

    if (event.key === 'ArrowDown') {
        scrollToSection(currentSection + 1);
    } else if (event.key === 'ArrowUp') {
        scrollToSection(currentSection - 1);
    }
});

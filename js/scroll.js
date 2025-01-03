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
    if (index < 0 || index >= totalSections || isScrolling) return; 

    isScrolling = true; 
    const section = sections[index];

    if (section.getAttribute("sectionId") > currentSection) {
        section.classList.add('activeSection')
    } else {
        document.querySelector(`section[sectionId="${currentSection}"]`).classList.remove('activeSection');
    }

    const sectionTop = section.offsetTop; 
    smoothScrollTo(sectionTop); 
    currentSection = index; 

    /*
    if (currentSection === 2) {
        blockedScroll = true;
        document.body.style.overflow = 'hidden'; 
    } else {
        blockedScroll = false;
        document.body.style.overflow = ''; 
    }
     */
}
function preventDefault(event) {
    event.preventDefault();
}

const observer = new MutationObserver(() => {
    if (document.body.style.overflow === '') {
       // blockedScroll = false;
    }
});

observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['style']
});

window.addEventListener('wheel', (event) => {
    if (isScrolling) return;

    if (!bankaSection.classList.contains('visible')) {
        if (event.deltaY > 0) {
            if (blockedScrollDown) return;

            scrollToSection(currentSection + 1);
        } else if (event.deltaY < 0) {
            if (blockedScrollUp) return;

            scrollToSection(currentSection - 1);
        }
    }
});

window.addEventListener('keydown', (event) => {
    if (isScrolling || isScrollLocked) return;

    if (!bankaSection.classList.contains('visible')) {
        if (event.key === 'ArrowDown') {
            scrollToSection(currentSection + 1);
        } else if (event.key === 'ArrowUp') {
            scrollToSection(currentSection - 1);
        }
    }
});

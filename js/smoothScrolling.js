document.addEventListener('DOMContentLoaded', function () {
    let isScrolling = false; 
    const sections = document.querySelectorAll('section'); 
    let currentSection = 0; 

    function addOpenClassToAll() {
        const coreValues = document.querySelectorAll('.WhyUs-CoreValues-value');
        const textValue = document.querySelectorAll('.WhyUs-CoreValues-value-info-text');

        coreValues.forEach(value => {
            value.classList.add('openned');
        });
        textValue.forEach(value => {
            value.classList.add('openned');
        });
    }

    function checkVisibility() {
        // Проверяем ширину окна
        if (window.innerWidth < 951) {
            addOpenClassToAll();
            return; // Прекращаем выполнение функции, если ширина меньше 951px
        }

        var sections = $('.pagepiling section');
        var windowHeight = $(window).height();
        var whyUsVisible = false;

        sections.each(function () {
            var sectionTop = $(this).offset().top;

            if (sectionTop < $(window).scrollTop() + windowHeight) {
                if (!$(this).hasClass('visible')) {
                    $(this).addClass('visible');
                }

                if ($(this).hasClass('WhyUs')) {
                    whyUsVisible = true;
                }
            } else {
                if ($(this).hasClass('visible')) {
                    $(this).removeClass('visible');
                }

                if ($(this).hasClass('WhyUs')) {
                    whyUsVisible = false;
                }
            }
        });

        if (whyUsVisible) {
            disableScroll();
        } else {
            enableScroll();
        }
    }

    function preventDefault(e) {
        e.preventDefault();
    }

    function disableScroll() {
        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('touchmove', preventDefault, { passive: false });
        window.addEventListener('scroll', preventDefault, { passive: false });
    }

    function enableScroll() {
        window.removeEventListener('wheel', preventDefault);
        window.removeEventListener('touchmove', preventDefault);
        window.removeEventListener('scroll', preventDefault);
    }

    $(window).on('resize', checkVisibility);
    $(document).ready(checkVisibility);
    setInterval(checkVisibility, 100); 

    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return; 
        currentSection = index;

        const section = sections[currentSection];
        const targetPosition = section.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 3000; 
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); 
            const ease = easeInOutQuart(progress); 

            window.scrollTo(0, startPosition + (distance * ease));

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        function easeInOutQuart(t) {
            return t < 0.5 
                ? 8 * t * t * t * t 
                : 1 - Math.pow(-2 * t + 2, 4) / 2; 
        }

        requestAnimationFrame(animation);
    }

    window.addEventListener('wheel', function (event) {
        event.preventDefault(); 

        if (isScrolling) return;

        isScrolling = true;

        if (event.deltaY > 0) {
            scrollToSection(currentSection + 1);
        } else {
            scrollToSection(currentSection - 1);
        }

        setTimeout(() => {
            isScrolling = false;
        }, 1000); 
    })

    window.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown') {
            scrollToSection(currentSection + 1);
        } else if (event.key === 'ArrowUp') {
            scrollToSection(currentSection - 1);
        }
    });

    const coreValues = document.querySelectorAll('.WhyUs-CoreValues-value');
    const textValue = document.querySelectorAll('.WhyUs-CoreValues-value-info-text');
    let currentIndex = 0;
    let count = 0;

    function updateClasses() {
        coreValues.forEach(value => {
            value.classList.remove('openned');
        });
        textValue.forEach(value => {
            value.classList.remove('openned');
        });

        setTimeout(() => {
            if (currentIndex < coreValues.length) {
                coreValues[currentIndex].classList.add('openned');
                textValue[currentIndex].classList.add('openned');
            }
        }, 500);
    }

    function nextValue() {
        if (currentIndex < coreValues.length - 1) {
            currentIndex++;
        }
        updateClasses();
    }

    updateClasses();

    const nextButton = document.querySelector('.next-button');
    if (nextButton) {
        nextButton.addEventListener('click', nextValue);
    }

    window.addEventListener('wheel', (event) => {
        const whyUsSection = document.querySelector('.WhyUs');
        const isWhyUsVisible = whyUsSection.classList.contains('visible');

        if (isWhyUsVisible) {
            if (event.deltaY > 0) {
                if (currentIndex < coreValues.length - 1) {
                    currentIndex++;
                    count = 0;
                } else {
                    count++;
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    if (currentIndex === 0) {
                        count++;
                    }
                } else {
                    count++;
                }
            }

            if (count >= 3) {
                enableScroll();
                count = 0;
            }
            updateClasses();
        }
    });
});

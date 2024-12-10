
function preventDefault(e) {
    e.preventDefault();
}

$(function () {
    var scroll = new LocomotiveScroll({
        el: document.querySelector('.wrapper'),
        smooth: true
    });

    var isScrolling = false;

    scroll.on('scroll', function (obj) {
        if (isScrolling) return;

        var delta = obj.direction;

        var currentSection = document.querySelector('.pagepiling .visible');
        var whyUsSection = document.querySelector('.WhyUs');

        if (whyUsSection === currentSection) {
            return; 
        }

        isScrolling = true;

        var duration = 1200; 

        if (delta === "down") {
            scroll.scrollTo(scroll.scroll.instance.scroll.y + window.innerHeight, {
                duration: duration,
                easing: [0.25, 0.25, 0.25, 0.25], 
                callback: function () {
                    isScrolling = false;
                }
            });
        } else {
            scroll.scrollTo(scroll.scroll.instance.scroll.y - window.innerHeight, {
                duration: duration,
                easing: [0.25, 0.25, 0.25,0.25],
                callback: function () {
                    isScrolling = false;
                }
            });
        }

        animateSections();
    });
    function animateSections() {
        var sections = $('.pagepiling section');
        var windowHeight = $(window).height();
        var whyUsVisible = false;


        sections.each(function () {
            var sectionTop = $(this).offset().top;

            if (sectionTop < scroll.scroll.instance.scroll.y + windowHeight - 100) {
                $(this).addClass('visible');
                if ($(this).hasClass('WhyUs')) {
                    whyUsVisible = true; 
                }
            } else {
                $(this).removeClass('visible');
                if ($(this).hasClass('WhyUs')) {
                    whyUsVisible = false; 
                }
            }
        });

        if (whyUsVisible) {
            onWhyUsVisible(); 
            scroll.stop();
            disableScroll();
        }
    }


    function onWhyUsVisible() {
        console.log("Секция WhyUs теперь видима!");
    }

    function disableScroll() {
        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('touchmove', preventDefault, { passive: false });
        window.addEventListener('scroll', preventDefault, { passive: false });
    }

    $(window).on('resize', function () {
        animateSections();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const coreValues = document.querySelectorAll('.WhyUs-CoreValues-value');
    const textValue = document.querySelectorAll('.WhyUs-CoreValues-value-info-text');
    let currentIndex = 0;
    let count = 0; 

    function updateClasses() {
        coreValues.forEach((value, index) => {
            value.classList.toggle('openned', index === currentIndex);
        });
        textValue.forEach((value, index) => {
            value.classList.toggle('openned', index === currentIndex);
        });
    }

    updateClasses();

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
                count=0;
            }
            updateClasses();
        }
    });

    function enableScroll() {
        window.removeEventListener('wheel', preventDefault, { passive: false });
        window.removeEventListener('touchmove', preventDefault, { passive: false });
        window.removeEventListener('scroll', preventDefault, { passive: false });
    }
});
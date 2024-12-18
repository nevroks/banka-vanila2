document.addEventListener('DOMContentLoaded', function () {
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

    const preventDefault = (e) => {
        e.preventDefault();
    };

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
                document.body.style.overflow = ''; 
                count = 0;
            }
            updateClasses();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const coreValues = document.querySelectorAll('.WhyUs-CoreValues-value');
    const textValue = document.querySelectorAll('.WhyUs-CoreValues-value-info-text');
    let currentIndex = 0;
    let count = 0;
    let hasResetCount = false; 
    let hasResetCountAtZero = false; 

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

    function checkScreenWidth() {
        if (window.innerWidth <= 970) {
            coreValues.forEach(value => value.classList.add('openned'));
            textValue.forEach(value => value.classList.add('openned'));
            return true;
        }
        return false; 
    }

    function resetCount() {
        count = 0; 
        hasResetCount = true; 
        hasResetCountAtZero = false; 
    }

    if (!checkScreenWidth()) {
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
                if (!hasResetCount) {
                    resetCount();
                }

                if (event.deltaY > 0) {
                    if (currentIndex < coreValues.length - 1) {
                        currentIndex++;
                        resetCount(); 
                        hasResetCountAtZero = false; 
                    } else {
                        count++;
                    }
                } else {
                    if (currentIndex > 0) {
                        currentIndex--;
                        if (currentIndex === 0 && !hasResetCountAtZero) {
                            count = 0; 
                            hasResetCountAtZero = true; 
                        }
                    } else {
                        count++; 
                    }
                }

                console.log(count);
                if (count >= 4) {
                    document.body.style.overflow = ''; 
                    count = 0;
                }
                updateClasses();
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    hasResetCount = false; 
                }
            });
        });

        const whyUsSection = document.querySelector('.WhyUs');
        if (whyUsSection) {
            observer.observe(whyUsSection);
        }
    }
});

//===============================================================================================================

document.addEventListener('DOMContentLoaded', function() {
    const coreValues = document.querySelectorAll('.WhyUs-CoreValues-value');
    let currentIndex = 0;
    let scrollCount = 0; 
    let firstScroll = true;
    let isBlock3Active = false; 
    let upScrollCount = 0; 

    function updateClasses() {
        coreValues.forEach(value => {
            value.classList.remove('opennedBlock3');
            // value.classList.remove('opennedBlock2');
        });

        if (firstScroll) {
            coreValues.forEach(value => {
                if (value.classList.contains('second') || value.classList.contains('third')) {
                    value.classList.add('opennedBlock2');
                }
            });
        } else if (scrollCount > 0) {
            coreValues.forEach(value => {
                if (value.classList.contains('third')) {
                    value.classList.add('opennedBlock3');
                    isBlock3Active = true; 
                }
            });
        }
    }

    function nextValue() {
        if (currentIndex < coreValues.length - 1) {
            currentIndex++;
            scrollCount++; 
            updateClasses();
            firstScroll = false;
        }
    }

    function prevValue() {
        if (currentIndex > 0) {
            currentIndex--;
            scrollCount = Math.max(0, scrollCount - 1); 
            setTimeout( upScrollCount++ ,1000)
            // upScrollCount++; 
            
            if (upScrollCount === 1) {
                coreValues.forEach(value => {
                    if (value.classList.contains('opennedBlock3')) {
                        value.classList.remove('opennedBlock3');
                    }
                });
            }
    
            if (upScrollCount === 2) {
                coreValues.forEach(value => {
                    if (value.classList.contains('opennedBlock2')) {
                        value.classList.remove('opennedBlock2');
                        updateClasses();
                    }
                });
                scrollCount = 0;
                upScrollCount = 0;
                firstScroll = true; 
            }
        }
    }
    
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            nextValue();
            upScrollCount = 0; 
        } else {
            prevValue();
        }
    });
    
});



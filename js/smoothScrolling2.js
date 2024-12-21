let stepsForSecondBlock = 0;
let stepsForThirdBlock = 0;

let secondBlock = document.querySelector('.second');
let thirdBlock = document.querySelector('.third');

window.addEventListener('wheel', (e) => {
    let activeSections = document.querySelectorAll('.activeSection');

    if (activeSections[activeSections.length - 1].getAttribute('sectionId') == "2") {
        let step = 55;

        if (e.deltaY > 0) {
            if (stepsForSecondBlock <= 5) {
                stepsForSecondBlock += 1;
                secondBlock.style.transform = `translateY(-${stepsForSecondBlock * step}px)`;
                thirdBlock.style.transform = `translateY(-${stepsForSecondBlock * step}px)`;
            } else {
                if (stepsForThirdBlock <= 5) {
                    stepsForThirdBlock += 1;
                    thirdBlock.style.transform = `translateY(-${(stepsForSecondBlock * step) + (stepsForThirdBlock * step)}px)`;
                } else {
                    setTimeout(() => blockedScroll = false, 750);
                }
            }
        }
    }
})
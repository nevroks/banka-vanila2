let stepsForSecondBlock = 0;
let stepsForThirdBlock = 0;

let secondBlock = document.querySelector('.second');
let thirdBlock = document.querySelector('.third');

if (window.innerWidth > 1024) {
    window.addEventListener('wheel', (e) => {
        let activeSections = document.querySelectorAll('.activeSection');

        if (activeSections[activeSections.length - 1].getAttribute('sectionId') == "2") {
            let step = 55;

            if (stepsForThirdBlock < 6) {
                setTimeout(() => blockedScrollDown = true, 750);
            } else if (stepsForThirdBlock == 6) {
                setTimeout(() => blockedScrollDown = false, 750);
            }

            if (stepsForSecondBlock > 0) {
                setTimeout(() => blockedScrollUp = true, 750);
            } else if (stepsForSecondBlock == 0) {
                setTimeout(() => blockedScrollUp = false, 750);
            }

            if (e.deltaY > 0) {
                if (stepsForSecondBlock <= 5) {
                    stepsForSecondBlock += 1;
                    secondBlock.style.transform = `translateY(-${stepsForSecondBlock * step}px)`;
                    thirdBlock.style.transform = `translateY(-${stepsForSecondBlock * step}px)`;
                } else {
                    if (stepsForThirdBlock <= 5) {
                        stepsForThirdBlock += 1;
                        thirdBlock.style.transform = `translateY(-${(stepsForSecondBlock * step) + (stepsForThirdBlock * step)}px)`;
                    }
                }
            } else if (e.deltaY <= 0) {
                if (stepsForThirdBlock > 0) {
                    stepsForThirdBlock -= 1;
                    thirdBlock.style.transform = `translateY(-${(stepsForSecondBlock * step) + (stepsForThirdBlock * step)}px)`;
                } else {
                    if (stepsForSecondBlock > 0) {
                        stepsForSecondBlock -= 1;
                        thirdBlock.style.transform = `translateY(-${stepsForSecondBlock * step}px)`;
                        secondBlock.style.transform = `translateY(-${stepsForSecondBlock * step}px)`;
                    }
                }
            }
        } else {
            blockedScrollUp = false;
            blockedScrollDown = false;
        }
    })
}
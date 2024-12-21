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
                }
            }

            console.log(stepsForSecondBlock);
            console.log(stepsForThirdBlock);
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

            console.log(stepsForSecondBlock);
            console.log(stepsForThirdBlock);
        }

        if ((stepsForThirdBlock == 6 && stepsForSecondBlock == 6) || (stepsForThirdBlock == 0 && stepsForSecondBlock == 0)) {
            setTimeout(() => blockedScroll = false, 750);
        } else {
            setTimeout(() => blockedScroll = true, 750);
        }
    }
})
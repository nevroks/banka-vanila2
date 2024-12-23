let stepsForSecondBlock = 0;
let stepsForThirdBlock = 0;

let secondBlock = document.querySelector('.second');
let thirdBlock = document.querySelector('.third');

let isTouchDevice = false;
let isMouseDevice = true;

function detectTrackPad(e) {
    if (e.wheelDeltaY) {
        if (e.wheelDeltaY === (e.deltaY * -3)) {
            isTouchDevice = true;
            isMouseDevice = false;
        }
    }
    else if (e.deltaMode === 0) {
        isTouchDevice = true;
        isMouseDevice = false;
    } else {
        isMouseDevice = true;
    }
    console.log(isTouchDevice ? "Trackpad detected" : "Mousewheel detected");
}

document.addEventListener("mousewheel", detectTrackPad, false);
document.addEventListener("DOMMouseScroll", detectTrackPad, false);

if (window.innerWidth > 1024) {
    setInterval(() => {
        let activeSections = document.querySelectorAll('.activeSection');
        if (activeSections[activeSections.length - 1].getAttribute('sectionId') == "2" && isMouseDevice) {
            window.addEventListener('wheel', (e) => {
                let step = 40;

                if (stepsForThirdBlock < 5) {
                    setTimeout(() => blockedScrollDown = true, 750);
                } else if (stepsForThirdBlock >= 5) {
                    setTimeout(() => blockedScrollDown = false, 750);
                }

                if (stepsForSecondBlock > 0) {
                    setTimeout(() => blockedScrollUp = true, 750);
                } else if (stepsForSecondBlock == 0) {
                    setTimeout(() => blockedScrollUp = false, 750);
                }

                console.log("Touch: " + isTouchDevice);
                console.log("Mouse: " + isMouseDevice);

                if (e.deltaY > 0) {
                    console.log('mouse down')
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
                    console.log('mouse up')
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
            })
        } else {
            blockedScrollUp = false;
            blockedScrollDown = false;
        }
    }, 200);
}
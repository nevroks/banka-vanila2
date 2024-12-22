$(document).ready(function() {
    const countMap = [0, 7, 14, 21, 28, 36];
    let showedImages = 0;
    let currentSection = 0;

    function showGirlandsScrollDown() {
        let index = 1;
        for (let i = showedImages + 1; i <= countMap[currentSection]; i++) {
            setTimeout(() => {
                document.querySelector(`.girland${i}`).classList.remove('hiddenGirland');
            }, 100 * index)

            index += 1;
        }

        showedImages = countMap[currentSection]
    }

    function showGirlandsScrollUp() {
        let index = 1

        for (let i = showedImages; i > countMap[currentSection]; i--) {
            setTimeout(() => {
                document.querySelector(`.girland${i}`).classList.add('hiddenGirland');
            }, 100 * index)

            index += 1
        }

        showedImages = countMap[currentSection]
    }

    if (window.innerWidth >= 1024) {
        window.addEventListener('wheel', (e) => {
            let sections = document.querySelectorAll('.activeSection')
            currentSection = sections[sections.length - 1].getAttribute('sectionId');

            if (e.deltaY > 0) {
                showGirlandsScrollDown()
            } else if (e.deltaY < 0) {
                showGirlandsScrollUp()
            }
        })
    } else {
        for (let i = 1; i <= 36; i++) {
            setTimeout(() => {
                document.querySelector(`.girland${i}`).classList.remove('hiddenGirland');
            }, 100 * i)
        }
        /*
        document.querySelectorAll('.girland').forEach((el) => {
            el.classList.remove('hiddenGirland');
        })
        */
    }
});
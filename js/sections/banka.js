$(function() {
        const bankaWrapper = document.querySelector('.banka-banka-wrapper');
        const bankaLid = document.querySelector('.banka-banka-lid');
        const cookie = document.querySelector('.banka-banka-specialCookie');


        let container = document.querySelector('.banka');
        let jar = document.querySelector('.banka-banka-jar');


        bankaWrapper.addEventListener('click', startAnimation);

        function startAnimation() {
            console.log("start");

            bankaWrapper.removeEventListener('click', startAnimation);
            // ---убрать скролл надо---

            // ---убрать скролл надо---

            const step1Duration = 1100;
            const step2Duration = 900;
            const step3Duration = 900;
            const step4Duration = 600;
            const step5Duration = 1100;
            const step6Duration = 900;
            const step7Duration = 900;
            // ----- 1 шаг -----
            bankaWrapper.classList.add('step-1');

            setTimeout(() => {
                // ----- 2 шаг -----
                bankaLid.classList.add('step-2');

            }, step1Duration)
            setTimeout(() => {
                // ----- 3 шаг -----
                bankaLid.classList.add('step-3');
                cookie.classList.add('step-3');
            }, step1Duration + step2Duration)
            setTimeout(() => {
                // ----- 4 шаг -----
                cookie.classList.add('step-4');
                setTimeout(() => {
                    cookie.classList.add('z-index');
                }, step4Duration / 1.7)
            }, step1Duration + step2Duration + step3Duration)
            setTimeout(() => {
                // ----- 5 шаг -----
                bankaWrapper.classList.add('step-5');
                cookie.classList.add('step-5');
            }, step1Duration + step2Duration + step3Duration + step4Duration)
            setTimeout(() => {
                // ----- 6 шаг -----
                cookie.classList.add('step-6');
            }, step1Duration + step2Duration + step3Duration + step4Duration + step5Duration)
            setTimeout(() => {
                // ----- 7 шаг -----
                cookie.classList.add('step-7');
            }, step1Duration + step2Duration + step3Duration + step4Duration + step5Duration + step6Duration)
        }

    })
    // Короче, шаги анимации:
    // 1. Приближается камера банка немного опускается вниз, перестраивается хедер | длительность: 1.1 с
    // 2. Крышка как бы приподнимается и отлетает чуть влево | длительность: 0.9 с
    // 3. Крышка отлевает влево и поворачивается, появляется печенье| длительность: 0.9 с
    // 4. Печенье подлетает в верх | длительность: 0.6 с
    // 5. Банка уходит в opacity 0, печенье центруется | длительность: 1.1 с
    // 6. Печенье увеличивается | длительность: 0.9 с
    // 7. Печенье раскалывается | длительность: 0.9 с
$(function() {
        const bankaSectionTitle = document.querySelector(".banka-banka-title")

        const bankaWrapper = document.querySelector('.banka-banka-wrapper');
        const bankaLid = document.querySelector('.banka-banka-lid');
        const cookie = document.querySelector('.banka-banka-specialCookie');
        const form = document.querySelector('.banka-banka-form');

        bankaWrapper.addEventListener('click', startAnimation);

        function startAnimation() {
            bankaWrapper.removeEventListener('click', startAnimation);
            bankaWrapper.classList.remove('glow');
            document.querySelector('.pagepiling').classList.add("scroll-block")


            const step0Duration = 1100;
            const step1Duration = 1100;
            const step2Duration = 900;
            const step3Duration = 600;
            const step4Duration = 1100;
            const step5Duration = 900;
            const step6Duration = 600;
            const step7Duration = 900;

            bankaSectionTitle.classList.add("step-0")
                // ----- 1 шаг -----
            setTimeout(() => {
                bankaWrapper.classList.add('step-1');
            }, step0Duration)
            setTimeout(() => {
                // ----- 2 шаг -----
                bankaLid.classList.add('step-2');
                cookie.classList.add('step-2');
            }, step0Duration + step1Duration)
            setTimeout(() => {
                // ----- 3 шаг -----
                cookie.classList.add('step-3');
                setTimeout(() => {
                    cookie.classList.add('z-index');
                }, step4Duration / 1.7)
            }, step0Duration + step1Duration + step2Duration)
            setTimeout(() => {
                // ----- 4 шаг -----
                bankaWrapper.classList.add('step-4');
                cookie.classList.add('step-4');
            }, step0Duration + step1Duration + step2Duration + step3Duration)
            setTimeout(() => {
                // ----- 5 шаг -----
                cookie.classList.add('step-5');
            }, step0Duration + step1Duration + step2Duration + step3Duration + step4Duration)
            setTimeout(() => {
                // ----- 6 шаг -----
                cookie.classList.add('step-6');
                form.classList.add('step-6');
            }, step0Duration + step1Duration + step2Duration + step3Duration + step4Duration + step5Duration)
            setTimeout(() => {
                // ----- 7 шаг -----
                cookie.classList.add('step-7');
                form.classList.add('step-7');
                form.classList.add('step-7');
            }, step0Duration + step1Duration + step2Duration + step3Duration + step4Duration + step5Duration + step6Duration)
        }


        const bankaFormStep1 = document.querySelector('.banka-banka-form-step1');
        const bankaFormStep1ActionButton = document.querySelector(".banka-banka-form-step1-button")
        const bankaFormStep2 = document.querySelector('.banka-banka-form-step2');
        const bankaFormStep2ActionButton = document.querySelector('.banka-banka-form-step2-button');
        const bankaFormStep3 = document.querySelector('.banka-banka-form-step3');
        bankaFormStep1ActionButton.addEventListener('click', () => {
            bankaFormStep1.classList.add('opacity')
            setTimeout(() => {
                bankaFormStep1.style.display = "none"
                bankaFormStep2.style.display = "flex"
                setTimeout(() => {
                    bankaFormStep2.classList.remove('opacity')
                }, 10)
            }, 600)
        })
        bankaFormStep2ActionButton.addEventListener('click', () => {
            bankaFormStep2.classList.add("opacity")
            setTimeout(() => {
                bankaFormStep2.style.display = "none"
                bankaFormStep3.style.display = "flex"
                form.classList.add("expanded")
                setTimeout(() => {
                    bankaFormStep3.classList.remove('opacity')
                }, 900)
            }, 600)
        })
    })
    // Короче, шаги анимации:
    // 0. Пропадает discover your fortune | длительность: 1.1 с
    // 1. Приближается камера банка немного опускается вниз | длительность: 1.1 с
    // 2. Крышка отлевает влево и поворачивается, появляется печенье| длительность: 0.9 с
    // 3. Печенье подлетает в верх | длительность: 0.6 с
    // 4. Банка уходит в opacity 0, печенье центруется | длительность: 1.1 с
    // 5. Печенье увеличивается | длительность: 0.9 с
    // 6. Печенье потярясывается, убирается display:none у формы | длительность: 0.6 с
    // 7. Дольки печенья разьезжаются по сторонам, появляется белая форма | длительность: 0.9 с

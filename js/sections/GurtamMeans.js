if (window.innerWidth > 1024) {
    document.addEventListener("DOMContentLoaded", function () {
        const blocks = [
            document.getElementById("block1"),
            document.getElementById("block2"),
            document.getElementById("block3"),
            document.getElementById("block4"),
        ];

        const futureAwaitsSection = document.querySelector('.FutureAwaits');
        let scrollDisabled = false;

        function checkVisibility() {
            var sections = $('.pagepiling section');
            var windowHeight = $(window).height();
            var whyUsVisible = false;

            sections.each(function () {
                var sectionTop = $(this).offset().top;

                if (sectionTop < $(window).scrollTop() + windowHeight) {
                    if (!$(this).hasClass('visible')) {
                        $(this).addClass('visible');
                    }

                    if ($(this).hasClass('GurtamMeans')) {
                        whyUsVisible = true;
                    }
                } else {
                    if ($(this).hasClass('visible')) {
                        $(this).removeClass('visible');
                    }

                    if ($(this).hasClass('GurtamMeans')) {
                        whyUsVisible = false;
                    }
                }
            });


            if (whyUsVisible) {
                if (!scrollDisabled) {
                    addAnimationClasses();
                    scrollDisabled = true;
                }

            } else {
                scrollDisabled = false;
            }
        }

        function addAnimationClasses() {
            setTimeout(() => {
                blocks[0].classList.add('animated1')
            }, 350)

            setTimeout(() => {
                blocks[1].classList.add('animated2')
            }, 850)

            setTimeout(() => {
                blocks[2].classList.add('animated3')
            }, 1350)

            setTimeout(() => {
                blocks[3].classList.add('animated4')
            }, 1850)
        }

        checkVisibility();

        const observer = new MutationObserver(checkVisibility);

        observer.observe(futureAwaitsSection, {
            attributes: true,
            attributeFilter: ['class']
        });

        $(window).on('resize', checkVisibility);
        $(document).ready(checkVisibility);
        setInterval(checkVisibility, 100);
    });
} else {
    const blocks = [
        document.getElementById("block1"),
        document.getElementById("block2"),
        document.getElementById("block3"),
        document.getElementById("block4"),
    ];

    window.addEventListener('wheel', () => {
        if (isInViewport(document.querySelector('.viewporter'))) {
            setTimeout(() => {
                blocks[0].classList.add('animated1')
            }, 350)

            setTimeout(() => {
                blocks[1].classList.add('animated2')
            }, 850)

            setTimeout(() => {
                blocks[2].classList.add('animated3')
            }, 1350)

            setTimeout(() => {
                blocks[3].classList.add('animated4')
            }, 1850)
        }
    })
}
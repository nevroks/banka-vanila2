// document.addEventListener("DOMContentLoaded", function() {
//     const blocks = [
//         document.getElementById("block1"),
//         document.getElementById("block2"),
//         document.getElementById("block3"),
//     ];

//     const futureAwaitsSection = document.querySelector('.FutureAwaits');
//     let scrollDisabled = false;
//     function checkVisibility() {
//         var sections = $('.pagepiling section');
//         var windowHeight = $(window).height();
//         var whyUsVisible = false;

//         sections.each(function () {
//             var sectionTop = $(this).offset().top;

//             if (sectionTop < $(window).scrollTop() + windowHeight) {
//                 if (!$(this).hasClass('visible')) {
//                     $(this).addClass('visible');
//                 }

//                 if ($(this).hasClass('GurtamMeans')) {
//                     whyUsVisible = true;
//                 }
//             } else {
//                 if ($(this).hasClass('visible')) {
//                     $(this).removeClass('visible');
//                 }

//                 if ($(this).hasClass('GurtamMeans')) {
//                     whyUsVisible = false;
//                 }
//             }
//         });


//         if (whyUsVisible) {
//             disableScroll();
//             if (!scrollDisabled) { 
//                 addAnimationClasses(); 
//                 scrollDisabled = true; 
//             }
//             setTimeout(() => {
//                 enableScroll();
//             },1500)
//         } else {
//             enableScroll();
//             scrollDisabled = false; 
//         }
//     }

//     function addAnimationClasses() {
//         blocks.forEach((block, index) => {
//             if (block && !block.classList.contains(`animated${index + 1}`)) {
//                 block.classList.add(`animated${index + 1}`);
//                 console.log(`Adding animated${index + 1} to block ${index + 1}`);
//             }
//         });
//     }

//     function preventDefault(e) {
//         e.preventDefault();
//     }

//     function disableScroll() {
//         window.addEventListener('wheel', preventDefault, { passive: false });
//         window.addEventListener('touchmove', preventDefault, { passive: false });
//         window.addEventListener('scroll', preventDefault, { passive: false });
//     }

//     function enableScroll() {
//         window.removeEventListener('wheel', preventDefault);
//         window.removeEventListener('touchmove', preventDefault);
//         window.removeEventListener('scroll', preventDefault);
//     }

//     window.addEventListener('scroll', checkVisibility);

//     checkVisibility();

//     const observer = new MutationObserver(checkVisibility);

//     observer.observe(futureAwaitsSection, {
//         attributes: true,
//         attributeFilter: ['class']
//     });

//     $(window).on('resize', checkVisibility);
//     $(document).ready(checkVisibility);
//     setInterval(checkVisibility, 100);
// });


document.addEventListener("DOMContentLoaded", function() {
    const blocks = [
        document.getElementById("block1"),
        document.getElementById("block2"),
        document.getElementById("block3"),
        document.getElementById("block4")
    ];

    const targetPositions = [-950, -650, -350, 0]; 
    let isAnimating = false; 
    let scrollCounter = 0;

    function animateBlocks(scrollDelta) {
        let allAtTarget = true;

        blocks.forEach((block, index) => {
            const targetPosition = targetPositions[index];
            const currentPosition = parseInt(block.style.transform.replace(/[^\d.-]/g, '')) || 0;

            // Увеличиваем скорость анимации в зависимости от scrollCounter
            const speed = Math.min(scrollCounter * 100, 1000); // Ограничиваем скорость

            const newPosition = currentPosition + Math.sign(scrollDelta) * speed;

            if (Math.abs(currentPosition - targetPosition) > speed) {
                block.style.transform = `translateX(${Math.sign(targetPosition - currentPosition) * Math.min(Math.abs(newPosition), Math.abs(targetPosition))}px)`;
                allAtTarget = false;
            } else {
                block.style.transform = `translateX(${targetPosition}px)`;
            }
        });

        if (allAtTarget) {
            isAnimating = false;
            setTimeout(() => {
               unlockScroll();  
            },1500)
           
        }
    }

    function onScroll(event) {
        const scrollDelta = event.deltaY;

        if (isAnimating) {
            event.preventDefault(); 
            scrollCounter++;
            animateBlocks(scrollDelta);
        }
    }

    function lockScroll() {
        document.body.style.overflowY = 'hidden'; 
    }
    
    function unlockScroll() {
        document.body.style.overflowY = ''; 
        scrollCounter = 0; 
    }

    const observer = new IntersectionObserver((entries) => {
        let whyUsVisible = false;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if ($(entry.target).hasClass('GurtamMeans')) {
                    whyUsVisible = true;
                }
            } else {
                entry.target.classList.remove('visible');
                if ($(entry.target).hasClass('GurtamMeans')) {
                    whyUsVisible = false;
                }
            }
        });

        if (whyUsVisible) {
            console.log(whyUsVisible);
            isAnimating = true; 
            lockScroll(); 
        }  
    }, {
        threshold: 0.5 
    });

    $('.pagepiling section').each(function() {
        observer.observe(this);
    });

    window.addEventListener('wheel', onScroll, { passive: false }); 
    window.addEventListener('scroll', function(e) {
        e.preventDefault(); 
    }, { passive: false }); 
});

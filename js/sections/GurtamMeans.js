document.addEventListener("DOMContentLoaded", function() {
    const blocks = [
        document.getElementById("block1"),
        document.getElementById("block2"),
        document.getElementById("block3"),
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
        blocks.forEach((block, index) => {
            if (block && !block.classList.contains(`animated${index + 1}`)) {
                setTimeout(() => {
                    setTimeout(() => {
                        block.classList.add(`animated${index + 1}`);
                    },500)
                },1000)
                console.log(`Adding animated${index + 1} to block ${index + 1}`);
            }
        });
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





// document.addEventListener("DOMContentLoaded", function() {
//     const blocks = [
//         document.getElementById("block1"),
//         document.getElementById("block2"),
//         document.getElementById("block3"),
//         document.getElementById("block4")
//     ];

//     let targetPositions = [-670, -750, -350, 0]; 
//     let isAnimating = false; 
//     let scrollCounter = 0;

//     function updateTargetPositions() {
//         if (window.innerWidth < 1224) {
//             targetPositions = [-600, -400, -200, 0];
//         } else if (window.innerWidth < 1475) {
//             targetPositions = [-770, -500, -250, 0];
//         } else {
//             targetPositions = [-1070, -700, -350, 0];
//         }
//     }

//     function animateBlocks(scrollDelta) {
//         // Проверяем ширину окна
//         if (window.innerWidth < 1050) {
//             return; // Прекращаем выполнение функции
//         }

//         let allAtTarget = true;

//         blocks.forEach((block, index) => {
//             const targetPosition = targetPositions[index];
//             const currentPosition = parseInt(block.style.transform.replace(/[^\d.-]/g, '')) || 0;

//             const speed = Math.min(scrollCounter * 100, 1000); // Ограничиваем скорость

//             const newPosition = currentPosition + Math.sign(scrollDelta) * speed;

//             if (Math.abs(currentPosition - targetPosition) > speed) {
//                 block.style.transform = `translateX(${Math.sign(targetPosition - currentPosition) * Math.min(Math.abs(newPosition), Math.abs(targetPosition))}px)`;
//                 allAtTarget = false;
//             } else {
//                 block.style.transform = `translateX(${targetPosition}px)`;
//             }
//         });

//         if (allAtTarget) {
//             isAnimating = false;
//             setTimeout(() => {
//                unlockScroll();  
//             }, 3000);
//         }
//     }

//     function onScroll(event) {
//         const scrollDelta = event.deltaY;

//         // Проверяем ширину окна
//         if (window.innerWidth < 1050) {
//             return; // Прекращаем выполнение функции
//         }

//         if (isAnimating) {
//             event.preventDefault(); 
//             scrollCounter++;
//             animateBlocks(scrollDelta);
//         }
//     }

    // function lockScroll() {
    //     document.body.style.overflowY = 'hidden'; 
    // }
    
    // function unlockScroll() {
    //     document.body.style.overflowY = ''; 
    //     scrollCounter = 0; 
    // }

//     const observer = new IntersectionObserver((entries) => {
//         let whyUsVisible = false;

//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 if ($(entry.target).hasClass('GurtamMeans')) {
//                     whyUsVisible = true;
//                 }
//             } else {
//                 entry.target.classList.remove('visible');
//                 if ($(entry.target).hasClass('GurtamMeans')) {
//                     whyUsVisible = false;
//                 }
//             }
//         });

//         if (whyUsVisible) {
//             console.log(whyUsVisible);
//             isAnimating = true; 
//             lockScroll(); 
//         }  
//     }, {
//         threshold: 0.5 
//     });

//     $('.pagepiling section').each(function() {
//         observer.observe(this);
//     });

//     window.addEventListener('wheel', onScroll, { passive: false }); 
//     window.addEventListener('scroll', function(e) {
//         e.preventDefault(); 
//     }, { passive: false });

//     updateTargetPositions();

//     window.addEventListener('resize', function() {
//         updateTargetPositions();
//     });
// });

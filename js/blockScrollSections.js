$(document).ready(function () {
    let visibleSections = ['FutureAwaits'];

    function updateVisibleSections() {
        visibleSections = ['FutureAwaits'];

        $('.pagepiling > section').each(function () {
            const section = $(this);
            if (section.hasClass('visible')) {
                const sectionTitle = section.attr('class').split(' ')[0];
                visibleSections.push(sectionTitle);

                if (sectionTitle !== 'WhyUs') {
                    disableScroll();
                    setTimeout(enableScroll, 1000);
                }
            }
        });

    }

    $(window).on('scroll', updateVisibleSections);

    const observer = new MutationObserver(updateVisibleSections);

    $('.pagepiling > section').each(function () {
        observer.observe(this, {
            attributes: true,
            attributeFilter: ['class']
        });
    });
});

function preventDefault(e) {
    e.preventDefault();
}

function disableScroll() {
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('scroll', preventDefault, { passive: false });
}

function enableScroll() {
    window.removeEventListener('wheel', preventDefault, { passive: false });
    window.removeEventListener('touchmove', preventDefault, { passive: false });
    window.removeEventListener('scroll', preventDefault, { passive: false });
}

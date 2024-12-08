$(document).ready(function () {
    let visibleSections = [];
    console.log(visibleSections);

    const visibleCountMap = {
        'FutureAwaits': 0,
        'GurtamMeans': 7,
        'WhyUs': 7,
        'OurBenefits': 7,
        'JoinGurtam': 7,
        'banka': 7
    };

    function updateVisibleSections() {
        visibleSections = []; 

        $('.pagepiling > section').each(function () {
            const section = $(this);
            if (section.hasClass('visible')) {
                const sectionTitle = section.attr('class').split(' ')[0]; 
                visibleSections.push(sectionTitle);
            }
        });
        
        console.log(visibleSections);

        showImagesBasedOnVisibleSections();
    }

    function showImagesBasedOnVisibleSections() {
        $('.girland').addClass('hidden');

        let imagesToShow = 0;
        visibleSections.forEach(section => {
            if (visibleCountMap[section] !== undefined) {
                imagesToShow += visibleCountMap[section]; 
            }
        });

        $('.girland').slice(0, imagesToShow).removeClass('hidden');
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

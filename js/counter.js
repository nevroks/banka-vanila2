document.addEventListener('DOMContentLoaded', function () {
    const animateNumbers = () => {
        const yearsCount = document.querySelector('.card-years-count');
        const employeesCount = document.querySelector('.card-EMPLOYEES-count');
        const countriesCount = document.querySelector('.card-COUNTRIES-count');
        const officesCount = document.querySelector('.card-OFFICES-count');

        let years = 20;
        let employees = 318;
        let countries = 149;
        let offices = 4;

        let startYear = 0;
        let startEmployee = 0;
        let startCountry = 0;
        let startOffice = 0;

        const duration = 2000; // продолжительность анимации в миллисекундах
        const frameRate = 60; // количество кадров в секунду
        const totalFrames = Math.round(duration / (1000 / frameRate));
        const incrementYear = years / totalFrames;
        const incrementEmployee = employees / totalFrames;
        const incrementCountry = countries / totalFrames;
        const incrementOffice = offices / totalFrames;

        const animate = (frame) => {
            if (frame <= totalFrames) {
                startYear += incrementYear;
                startEmployee += incrementEmployee;
                startCountry += incrementCountry;
                startOffice += incrementOffice;

                yearsCount.textContent = Math.floor(startYear) + '+';
                employeesCount.textContent = Math.floor(startEmployee) + '+';
                countriesCount.textContent = Math.floor(startCountry);
                officesCount.textContent = Math.floor(startOffice);

                requestAnimationFrame(() => animate(frame + 1));
            }
        };

        animate(0);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    animateNumbers(); 
                },500)
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(document.querySelector('.GurtamMeans-stats'));
});

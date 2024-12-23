if (window.innerWidth > 1024) {
    document.addEventListener('DOMContentLoaded', function () {
        const sections = document.querySelectorAll('section');
        const totalSections = sections.length;
        let animationStarted = false;

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

            const duration = 2000;
            const frameRate = 60;
            const totalFrames = Math.round(duration / (1000 / frameRate));
            const incrementYear = years / totalFrames;
            const incrementEmployee = employees / totalFrames;
            const incrementCountry = countries / totalFrames;
            const incrementOffice = offices / totalFrames;

            const resetValues = () => {
                startYear = 0;
                startEmployee = 0;
                startCountry = 0;
                startOffice = 0;
            };

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

            resetValues();
            animate(0);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animationStarted) {
                    animationStarted = true;
                    setTimeout(animateNumbers, 500);

                }
            });
        });

        const gurtamMeansSection = document.querySelector('.GurtamMeans');
        observer.observe(gurtamMeansSection);
    });
} else {
    const yearsCount = document.querySelector('.card-years-count');
    const employeesCount = document.querySelector('.card-EMPLOYEES-count');
    const countriesCount = document.querySelector('.card-COUNTRIES-count');
    const officesCount = document.querySelector('.card-OFFICES-count');

    yearsCount.textContent = "20+";
    employeesCount.textContent = "320+";
    countriesCount.textContent = "150+";
    officesCount.textContent = "4+";
}
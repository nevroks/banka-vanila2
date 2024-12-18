const texts = [{
        title: "Embrace the journey",
        semiTitle: `Forget the "How to" Guides and stop comparing your journey to others… `,
        text: `Forget the «How to» Guides and stop comparing your journey to others. They're on their own adventure, and you've got yours! Focus on your growth and trust that your story is unfolding just as it should`
    },
    {
        title: `Take time and treat yourself`,
        semiTitle: `Life ain't a competition, it's a journey. That's why there's enough space for everyone to shine…`,
        text: `Life isn't a competition, it's a journey. That's why there's enough space for everyone to shine, so forget about comparing yourself to others. Find your own way focusing on what brings you joy`
    },
    {
        title: `Trust yourself`,
        semiTitle: `You’ve got the skills to shine, but that fear of failure is holding you back…`,
        text: `You’ve got the skills to shine, but that fear of failure is holding you back. No worries! This year is all about leveling up —just trust your experience over the chatter of others`
    },
    {
        title: `Stay curious`,
        semiTitle: `Don't rush into conclusions. Take a moment, soak in the info...`,
        text: `Don't rush into conclusions. Take a moment, soak in the info, stay a persistant trush seeker and watch your ideas transform into pure digital treasure`
    },
    {
        title: `Catch the positive vibes`,
        semiTitle: `The universe is ready to reward you, so don’t get stuck in a rut… `,
        text: `The universe is ready to reward you, so don’t get stuck in a rut! Unleash your inner leader or kickstart fresh projects to ride the wave of success`
    },
    {
        title: `Lead the charge`,
        semiTitle: `Your creative sparks are ready to shine bright...`,
        text: `Your creative sparks are ready to shine bright! Prepare for exciting new projects that will showcase your leadership skills and boost your career growth`
    },
    {
        title: `Time to level up`,
        semiTitle: `Brace yourself for an exciting offer that could redefine your future…`,
        text: `Brace yourself for an exciting offer that could redefine your future! Trust your intuition — the right move will guide you to the success you’ve longed for`
    },
    {
        title: `Right time to risk it`,
        semiTitle: `Success will be yours when you set your sights on your goals…`,
        text: `Success will be yours when you set your sights on your goals. Be fearless and embrace the challenges — you’ll soon be celebrating the positive changes!`
    },
    {
        title: `Realign your focus`,
        semiTitle: `Get ready for a year that'll challenge and inspire you…`,
        text: `Get ready for a year that'll challenge and inspire you! Use this energy to  re-evaluate your path, reflect on your values and clarify your goals and aspirations`
    },
    {
        title: `Stay open minded`,
        semiTitle: `This year is all about meeting new people, but it’s on you to spark those partnerships…`,
        text: `This year is all about meeting new people, but it’s on you to spark those partnerships. Keep your heart and mind open — you’ll gain valuable insights if you take your time to know others`
    },
    {
        title: `Unite and succeed`,
        semiTitle: `It’s all about keeping it real with yourself and those around you…`,
        text: `It’s all about keeping it real with yourself and those around you.  You’ll open doors to exciting career benefits by connecting over shared interests`
    },
]
const vacancies = {
    "Python Developer": {
        "Junior": [{
                type: "paragraph",
                content: {
                    text: "You’ve chosen the right path for growth!🔥",
                }
            },
            {
                type: "paragraph",
                content: {
                    text: "Want to crush it in 2025? Here are the essential elements to focus on:",
                },
            },
            {
                type: "listItem",
                content: {
                    title: "Core Python Skills:",
                    text: " Learn syntax, libraries, and algorithms. Basically, the spellbook every Python developer needs."
                },
            },
            {
                type: "listItem",
                content: {
                    title: "Frameworks:",
                    text: " Django or Flask? Choose your fighter! You don’t need to know them all. Just understand enough to be able to fake confidence in the next meeting."
                },
            },
            {
                type: "listItem",
                content: {
                    title: "Relational Databases:",
                    text: " PostgreSQL, MySQL. Simply, learn to talk to databases without breaking them."
                },
            },
            {
                type: "paragraph",
                content: {
                    text: "In 2025, employers will stand out by offering:",
                }
            },
            {
                type: "listItem",
                content: {
                    title: "A meaningful product.",
                    text: " Imagine, at Gurtam, our products can save turtles' lives!"
                },
            },
            {
                type: "paragraph",
                content: {
                    text: "Start 2025 in a company where you don’t have to guess your career future and you know you will shine bright"
                }
            }
        ]
    }
}


$(function() {
    const formData = new FormData();
    const sendBtn = $(".banka-banka-form-step2-button")


    let isStartFormReported = false

    const isFieldsFilled = {
        stack: false,
        level: false,
        email: false,
    }

    $(".banka-banka-form-step2-select.stackSelect").change(function() {
        if ($(".banka-banka-form-step2-select.stackSelect").val() === "none") {
            isFieldsFilled.stack = false
        } else {
            formData.append("stack", $(".banka-banka-form-step2-select.stackSelect").val());
            isFieldsFilled.stack = true
            if ($(".banka-banka-form-step2-select.stackSelect").val() === "Technical Support Engineer" || $(".banka-banka-form-step2-select.stackSelect").val() === "SRE Engineer") {
                isFieldsFilled.level = true
                $(".banka-banka-form-step2-select.levelSelect").val("none");
                $(".banka-banka-form-step2-select.levelSelect").prop("disabled", true);
            } else {
                $(".banka-banka-form-step2-select.levelSelect").prop("disabled", false);
            }
            checkIsFieldsFilled();
        }
    })

    $(".banka-banka-form-step2-select.levelSelect").change(function() {
        if ($(".banka-banka-form-step2-select.levelSelect").val() === "none") {
            isFieldsFilled.level = false
        } else {
            formData.append("level", $(".banka-banka-form-step2-select.levelSelect").val());
            isFieldsFilled.level = true
            checkIsFieldsFilled();
        }
    })

    $(".banka-banka-form-step2-input.emailInput").on("input", function(e) {
        formData.append("email", e.target.value);
        if (e.target.value) {
            isFieldsFilled.email = true;
        } else {
            isFieldsFilled.email = false;
        }
        checkIsFieldsFilled();
    });

    sendBtn.on("click", () => {
        renderFormStep3Content()
        reportFormSubmit()
    })

    function checkIsFieldsFilled() {
        if (isFieldsFilled.stack && isFieldsFilled.level && isFieldsFilled.email) {
            sendBtn.prop("disabled", false);
        } else {
            sendBtn.prop("disabled", true);
        }
    }


    $(".banka-banka-form-step2-select.stackSelect").on('click', () => {
        if (!isStartFormReported) {
            reportFormStart('stack', '1')
        }
    })
    $(".banka-banka-form-step2-select.levelSelect").on('click', () => {
        if (!isStartFormReported) {
            reportFormStart('level', '2')
        }
    })
    $(".banka-banka-form-step2-input.emailInput").on('click', () => {
        if (!isStartFormReported) {
            reportFormStart('email', '3')
        }
    })

    function reportFormStart(name, step) {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            event: 'form_start',
            event_data: {
                name: `${name}`,
                generate_lead: true,
                step: `${step}`,
            }
        });
        isStartFormReported = true
    }

    function reportFormSubmit() {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            event: 'form_submit',
            event_data: {
                name: 'form',
                generate_lead: true,
                step: '4',
                email: formData.get("email"),
                stack: formData.get("stack"),
                level: formData.get("level"),
            }
        });
    }

    const text = texts[Math.floor(1 + Math.random() * (texts.length + 1 - 1))]

    document.querySelectorAll('.form-title-placeholder').forEach(el => {
        el.innerHTML = text.title
    })

    document.querySelectorAll('.form-semiTitle-placeholder').forEach(el => {
        el.innerHTML = text.semiTitle
    })

    document.querySelectorAll('.form-text-placeholder').forEach(el => {
        el.innerHTML = text.text
    })

    const bankaFormStep3TextPlaceholder = document.querySelector('.banka-banka-form-step3-textPlaceholder');
    const bankaFormStep3VacancyTitlePlaceholder = document.querySelector('.banka-banka-form-step3-vacancy-title-placeholder');
    const bankaFormStep3VacancyPositionPlaceholder = document.querySelector('.banka-banka-form-step3-vacancy-text-placeholder');


    function renderFormStep3Content() {
        const stack = vacancies[formData.get("stack")]
        const vacancy = stack[formData.get("level")]        
        
        bankaFormStep3VacancyPositionPlaceholder.textContent = formData.get("stack")
        bankaFormStep3VacancyTitlePlaceholder.textContent = formData.get("stack")
        
        const res = vacancy.map((el) => {
            switch (el.type) {
                case "paragraph":
                    return renderParagraph(el.content.text)
                case "listItem":
                    return renderListItem(el.content.title, el.content.text)
                case "link":
                    return renderLink()
            }
        })

        bankaFormStep3TextPlaceholder.innerHTML = res.join("")
    }


    const renderParagraph = (text) => {
        return `
            <p class="banka-banka-form-step3-paragraph banka-banka-form-text">${text}</p>
        `
    }
    const renderListItem = (title, text) => {
        return `    
            <p class="banka-banka-form-step3-listItem"><span>${title}</span>${text}</p>
        `
    }
    const renderLink = () => {
        return `<p class="banka-banka-form-step3-link">Btw, Gurtam corporate life is always on display. <a href="https://www.instagram.com/gurtam_people/">Come see yourself</a></p>`
    }
});
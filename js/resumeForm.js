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
});
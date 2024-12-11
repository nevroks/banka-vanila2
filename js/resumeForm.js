$(function() {
    const formData = new FormData();
    const sendBtn = $(".banka-banka-form-step2-button")

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


    const checkIsFieldsFilled = () => {
        if (isFieldsFilled.stack && isFieldsFilled.level && isFieldsFilled.email) {
            sendBtn.prop("disabled", false);
        } else {
            sendBtn.prop("disabled", true);
        }
    }
});
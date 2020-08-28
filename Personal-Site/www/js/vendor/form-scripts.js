$("#contactForm").validator().on("submit", function (event) {

    if (event.isDefaultPrevented()) {

        formError();
        // submitMSG(false, "Did you fill in the form properly?");

    } else {

        event.preventDefault();
        submitForm();

    }

});

// // EMAIL
// $("#contactForm button").on("click", async (e) => {
//     e.preventDefault();
//     $('#contactForm').bootstrapValidator('validate');
//     if ($('#contactForm').bootstrapValidator('isValid')) {

//     } else {
//         alert('Test')
//     }

// });

async function submitForm() {

    let args = ["p_name", "p_email", "p_message"];
    let data = {};
    args.forEach((arg) => {
        data[arg] = document.getElementById(arg).value;
    });

    const response = await fetch(
        `https://www.dillonestrada.com/contact?music=True`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );
    formSuccess()
}

function formSuccess() {

    $("#contactForm")[0].reset();
    submitMSG(true, "Message sent!")

}

function formError() {

    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });

}

function submitMSG(valid, msg) {

    if (valid) {
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#success").removeClass().addClass(msgClasses).text(msg);

}
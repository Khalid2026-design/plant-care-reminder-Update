const registerForm = document.getElementById("registerForm");

const username = document.getElementById("username");
const email = document.getElementById("reg-email");
const password = document.getElementById("reg-password");
const confirmPassword = document.getElementById("reg-confirm");

registerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;

    // USERNAME VALIDATION
    if (username.value.trim() === "") {

        showError(username, "نوم ضروری دی");
        isValid = false;

    } else if (username.value.length < 3) {

        showError(username, "نوم باید لږ تر لږه 3 حروف وی");
        isValid = false;

    } else {

        showSuccess(username);

    }


    // EMAIL VALIDATION
    if (email.value.trim() === "") {

        showError(email, "ایمل ضروری دی");
        isValid = false;

    } else if (!validateEmail(email.value)) {

        showError(email, "صحیح ایمل داخل کړئ");
        isValid = false;

    } else {

        showSuccess(email);

    }


    // PASSWORD VALIDATION
    if (password.value.trim() === "") {

        showError(password, "پاسورډ ضروری دی");
        isValid = false;

    } else if (password.value.length < 6) {

        showError(password, "پاسورډ باید 6 کرکټر ولري");
        isValid = false;

    } else {

        showSuccess(password);

    }


    // CONFIRM PASSWORD
    if (confirmPassword.value.trim() === "") {

        showError(confirmPassword, "پاسورډ تایید کړئ");
        isValid = false;

    } else if (confirmPassword.value !== password.value) {

        showError(confirmPassword, "پاسورډ یو شان نه دی");
        isValid = false;

    } else {

        showSuccess(confirmPassword);

    }


    // SAVE IN LOCAL STORAGE
    if (isValid) {

        const userData = {

            username: username.value,
            email: email.value,
            password: password.value

        };

        localStorage.setItem("user", JSON.stringify(userData));

        alert("حساب کامیاب جوړ شو 🌿");

        registerForm.reset();

    }

});



// SHOW ERROR
function showError(input, message) {

    input.style.backgroundColor = "#ffb3b3";
    input.style.border = "2px solid red";

    const small = input.parentElement.querySelector(".error");

    small.innerText = message;
    small.style.color = "red";

}



// SHOW SUCCESS
function showSuccess(input) {

    input.style.backgroundColor = "#b3ffcc";
    input.style.border = "2px solid green";

    const small = input.parentElement.querySelector(".error");

    small.innerText = "";

}



// EMAIL CHECK
function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}
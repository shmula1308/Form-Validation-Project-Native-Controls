const newUser = document.getElementById("registration-form");
const modal = document.getElementById("modal-box");
const closeBtn = document.getElementById("close-modal");
const logInBtn = document.getElementById("logIn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const fRadioBtn = document.getElementById("female");
const mRadioBtn = document.getElementById("male");
const customGenderBtn = document.getElementById("custom");
const emailAlert = document.querySelector(".email-required");
const passAlert = document.querySelector(".pass-required");
const logInForm = document.getElementById("main-form");
const alertEmail = document.querySelector(".email-invalid");


let customInputs = document.getElementById("custom-gender");
newUser.addEventListener("click", (ev) => {
    ev.preventDefault();
    modal.style.display = "block"
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

window.onclick = function (ev) {
    if (ev.target == modal) {
        modal.style.display = "none";
    }
}

customGenderBtn.addEventListener("change", () => {
    customInputs.style.display = "block";
})

fRadioBtn.addEventListener("click", () => {
    customInputs.style.display = "none";
})

mRadioBtn.addEventListener("click", () => {
    customInputs.style.display = "none";
})



let fns = [];
let data = {};

logInForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    for (let i = 0; i < fns.length; i++) {
        if (fns[i]() === false) {
            return;
        }
    }
    console.log("Verified data: ", data);
    logInForm.reset();
    return true;
})

function processEmail() {
    let emailVal = email.value;
    const email_pattern = /^[^\s@]+@[^\s@.]+\.[^\s@]+$/;

    if (email_pattern.test(emailVal) === false) {
        alertEmail.style.display = "block";
        return false;
    } else if (email_pattern.test(emailVal)) {
        alertEmail.style.display = "none";
    }

    data.email = emailVal;
    return true;
}

fns.push(processEmail)

function processPassword() {
    let pass = password.value;
    let lowercase = /[a-z]/;
    let uppercase = /[A-Z]/;
    let digit = /[0-9]/;
    let other = /[^a-zA-Z0-9]/;

    if (lowercase.test(pass) === false) {
        passAlert.style.display = "block";
        return false;
    }
    if (uppercase.test(pass) === false) {
        passAlert.style.display = "block";
        return false;
    }
    if (digit.test(pass) === false) {
        passAlert.style.display = "block";
        return false;
    }
    if (other.test(pass) === false) {
        passAlert.style.display = "block";
        return false;
    }
    passAlert.style.display = "none";
    data.password = pass;
    return true;
}

fns.push(processPassword);











const submitButton = document.getElementById('loginBtn');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');


function validateUser(email, password) {
    document.getElementById('emailErrorMessage').innerText = "";
    document.getElementById('passwordErrorMessage').innerText = "";
    document.getElementById('successfulLogin').innerText = "";
    emailInput.style.border = "black 2px solid";
    passwordInput.style.border = "black 2px solid";

    if (email !== "joaopedro.mainieri@gmail.com") {
        document.getElementById('emailErrorMessage').innerText = "Incorrect Email!";
        emailInput.style.border = "red 2px solid";
    } else {
        if (password === "Jppm2006") {
            document.getElementById('successfulLogin').innerHTML = "Login Successful!";
        } else {
            document.getElementById('passwordErrorMessage').innerHTML = "Incorrect Password!";
            passwordInput.style.border = "red 2px solid";
        }
    }
}

submitButton.addEventListener('click', function () {
    validateUser(emailInput.value, passwordInput.value);
});

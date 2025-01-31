// Selecting elements
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");
const lengthMsg = document.getElementById("length-msg");
const uppercaseMsg = document.getElementById("uppercase-msg");
const lowercaseMsg = document.getElementById("lowercase-msg");
const specialCharMsg = document.getElementById("special-char-msg");
const numberMsg = document.getElementById("number-msg");

// Function to validate password
function validatePassword(password) {
    // Regular expressions for validation
    const minLengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /\d/;

    // Validate and update the UI
    lengthMsg.classList.toggle('valid', minLengthRegex.test(password));
    lengthMsg.classList.toggle('invalid', !minLengthRegex.test(password));

    uppercaseMsg.classList.toggle('valid', uppercaseRegex.test(password));
    uppercaseMsg.classList.toggle('invalid', !uppercaseRegex.test(password));

    lowercaseMsg.classList.toggle('valid', lowercaseRegex.test(password));
    lowercaseMsg.classList.toggle('invalid', !lowercaseRegex.test(password));

    specialCharMsg.classList.toggle('valid', specialCharRegex.test(password));
    specialCharMsg.classList.toggle('invalid', !specialCharRegex.test(password));

    numberMsg.classList.toggle('valid', numberRegex.test(password));
    numberMsg.classList.toggle('invalid', !numberRegex.test(password));
}

// Event listener for password input
passwordInput.addEventListener("input", () => {
    validatePassword(passwordInput.value);
});

// Toggle password visibility
togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerHTML = "&#128064;"; // Eye icon for visible
    } else {
        passwordInput.type = "password";
        togglePassword.innerHTML = "&#128065;"; // Crossed eye icon for hidden
    }
});

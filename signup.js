const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', (e) => {
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    // Validation logic here
    if (usernameValue === '' || emailValue === '' || passwordValue === '' || confirmPasswordValue === '') {
        e.preventDefault(); // Prevent form submission if any field is empty
        alert('Please fill in all fields');
    }
}
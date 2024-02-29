const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const passwordMsg = document.getElementById('password-msg');

confirmPassword.addEventListener('change', toggleError);
password.addEventListener('change', toggleError);

function toggleError() {
     if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        passwordMsg.classList.add('error');
    }
    else {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        passwordMsg.classList.remove('error');
    }
};
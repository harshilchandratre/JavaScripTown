const form = document.getElementById('resform');
const Name = document.querySelector('.Name');
const patternName = /^[A-Za-z\s]+$/;
const Email = document.querySelector('.Email');
const patternEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const Password = document.querySelector('.Password');
const patternPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const rePassword = document.querySelector('.rePassword');

const nameIcon = document.getElementById('nameIcon')
const emailIcon = document.getElementById('emailIcon')
const passwordIcon = document.getElementById('passwordIcon')
const rePasswordIcon = document.getElementById('rePasswordIcon')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validation for name
    if (patternName.test(Name.querySelector('input').value.trim())) {
        Name.style.border = '2px solid #146a8e';
        nameIcon.style.color = "#146a8e"
    } else {
        Name.style.border = '2px solid crimson';
        nameIcon.style.color = "crimson"
        console.log('invalid name')
    }

    // Validation for email
    if (patternEmail.test(Email.querySelector('input').value)) {
        Email.style.border = '2px solid #146a8e';
        emailIcon.style.color = "#146a8e"
    } else {
        Email.style.border = '2px solid crimson';
        emailIcon.style.color = "crimson"
        console.log('invalid email')
    }

    // Validation for password
    if (patternPassword.test(Password.querySelector('input').value)) {
        if (Password.querySelector('input').value === rePassword.querySelector('input').value) {
            Password.style.border = '2px solid #146a8e';
            rePassword.style.border = '2px solid #146a8e';
            passwordIcon.style.color = "#146a8e";
            rePasswordIcon.style.color = "#146a8e";
        } else {
            Password.style.border = '2px solid crimson';
            rePassword.style.border = '2px solid crimson';
            passwordIcon.style.color = "crimson";
            rePasswordIcon.style.color = "crimson";
            console.log('password no match')
        }
    } else {
        Password.style.border = '2px solid crimson';
        rePassword.style.border = '2px solid crimson';
        passwordIcon.style.color = "crimson";
        rePasswordIcon.style.color = "crimson";
        console.log('invalid password')
    }
});




function handleShow() {
    const passwordInput = document.getElementById('password');
    const passwordEye = document.getElementById('passwordEye');
    const passwordDye = document.getElementById('passwordDye');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordEye.style.display = 'block';  // Hide the "Show Password" icon
        passwordDye.style.display = 'none';  // Show the "Hide Password" icon
    } else if (passwordInput.type === 'text') {
        passwordInput.type = 'password';
        passwordEye.style.display = 'none';  // Show the "Show Password" icon
        passwordDye.style.display = 'block';  // Hide the "Hide Password" icon
    }
}




// passwordDye.addEventListener('click', () => {
//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         passwordEye.style.display = 'block';  // Hide the "Show Password" icon
//         passwordDye.style.display = 'none';  // Show the "Hide Password" icon
//     } else if(passwordInput.type === 'text') {
//         passwordInput.type = 'password';
//         passwordEye.style.display = 'none';  // Show the "Show Password" icon
//         passwordDye.style.display = 'block';  // Hide the "Hide Password" icon
//     }
// });








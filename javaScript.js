
// 1. Show/Hide Password
document.getElementById('togglePw').addEventListener('click', function () {
    var pw = document.getElementById('passwordInput');
    pw.type = pw.type === 'password' ? 'text' : 'password';
});

// 2. Login Validation
function handleLogin() {
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    if (email === '' || password === '') {
        alert('Please enter both Email and Password!');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email! (@ is required)');
        return;
    }

    alert('Login Successful!');
}

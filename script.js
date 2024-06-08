document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login process (this would be replaced with actual authentication in a real app)
    if (username && password) {
        alert('Login successful!');
        window.location.href = 'https://www.instagram.com';
    } else {
        alert('Please enter both username and password.');
    }
});

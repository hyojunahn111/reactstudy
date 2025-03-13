document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 제출 동작 멈추기
        
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email Address:', email);
        console.log('Password:', password);
    });
});

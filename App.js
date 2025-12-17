function register() {
            const name = document.getElementById('regName').value;
            const password = document.getElementById('regPassword').value;
            if (name && password) {
                localStorage.setItem('userName', name);
                localStorage.setItem('userPassword', password);
                alert('Registration successful. Redirecting to login page.');
                document.getElementById('registration-form').style.display = 'none';
                document.getElementById('login-form').style.display = 'block';
            } else {
                alert('Please enter both name and password.');
            }
        }

        function login() {
            const name = document.getElementById('loginName').value;
            const password = document.getElementById('loginPassword').value;
            const storedName = localStorage.getItem('userName');
            const storedPassword = localStorage.getItem('userPassword');
            const messageElement = document.getElementById('message');

            if (name === storedName && password === storedPassword) {
                document.getElementById('login-form').style.display = 'none';
                document.getElementById('home-page').style.display = 'block';
            } else {
                messageElement.textContent = 'Invalid username or password.';
            }
        }

// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: 'securitydatabase-a48c2',
    // Add more configuration as needed for your Firebase setup
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Signed in successfully
            var user = userCredential.user;
            alert('Login successful!');
            // You can redirect or perform further actions here after successful login
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/invalid-email') {
                showError('Invalid email.');
            } else if (errorCode === 'auth/user-disabled') {
                showError('User account is disabled.');
            } else if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
                showError('Incorrect username or password.');
            } else {
                showError(errorMessage);
            }
        });
});

function showError(message) {
    var errorElement = document.getElementById('errorText');
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

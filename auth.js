document.addEventListener('DOMContentLoaded', () => {
    const signUpModal = document.getElementById('sign-up-modal');
    const logInModal = document.getElementById('log-in-modal');
    const closeSignUpBtn = document.getElementById('close-sign-up');
    const closeLogInBtn = document.getElementById('close-log-in');
    const signUpBtn = document.getElementById('sign-up-btn');
    const logInBtn = document.getElementById('log-in-btn');
    const signUpForm = document.getElementById('sign-up-form');
    const logInForm = document.getElementById('log-in-form');

    // Open Sign Up Modal
    signUpBtn.addEventListener('click', () => {
        signUpModal.style.display = 'flex';
    });

    // Open Log In Modal
    logInBtn.addEventListener('click', () => {
        logInModal.style.display = 'flex';
    });

    // Close Sign Up Modal
    closeSignUpBtn.addEventListener('click', () => {
        signUpModal.style.display = 'none';
    });

    // Close Log In Modal
    closeLogInBtn.addEventListener('click', () => {
        logInModal.style.display = 'none';
    });

    // Close Modals when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === signUpModal) {
            signUpModal.style.display = 'none';
        }
        if (event.target === logInModal) {
            logInModal.style.display = 'none';
        }
    });

    // Handle Sign Up Form Submission
    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle Sign Up Logic (e.g., send data to server)
        alert('Sign Up form submitted!');
        signUpModal.style.display = 'none';
    });

    // Handle Log In Form Submission
    logInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle Log In Logic (e.g., send data to server)
        alert('Log In form submitted!');
        logInModal.style.display = 'none';
    });
});

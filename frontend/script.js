document.addEventListener('DOMContentLoaded', function() {
    const signinButton1 = document.getElementById('signin-btn-google');
    signinButton1.addEventListener('click', function() {
      window.location.href = 'https://reachinbox.onrender.com/auth/google';
    });
  });
  
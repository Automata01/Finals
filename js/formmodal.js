  // Get elements
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const closeLogin = document.getElementById('closeLogin');
  const closeSignup = document.getElementById('closeSignup');
  const signUpPop = document.getElementById('signuppop'); 
  const orderBtn = document.getElementById('orderBtn');
  const cartBtn = document.getElementById('cartBtn');

  // Open modals
  loginBtn.onclick = () => { loginModal.style.display = 'block'; }
  signupBtn.onclick = () => { signupModal.style.display = 'block'; }
  orderBtn.onclick = () => { loginModal.style.display = 'block';}
  cartBtn.onclick = () => { loginModal.style.display = 'block'; }

  // Close modals
  closeLogin.onclick = () => { loginModal.style.display = 'none'; }
  closeSignup.onclick = () => { signupModal.style.display = 'none'; }

  // Close when clicking outside of modal
  window.onclick = function(event) {
      if (event.target == loginModal) {
          loginModal.style.display = 'none';
      } else if (event.target == signupModal) {
          signupModal.style.display = 'none';
      }
  }

  signUpPop.onclick = () => {
    loginModal.style.display = 'none'; // Close the login modal
    signupModal.style.display = 'block'; // Open the signup modal

}
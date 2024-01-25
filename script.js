// Switching between login and signin forms
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// basic form validation

//sign in form validation 
function validateSignInForm() {
    var username = document.forms["sign-in-form"]["username"].value;
    var password = document.forms["sign-in-form"]["password"].value;
  
    if (username === "" || password === "") {
      alert("Please fill the fields to sign In.");
      return false;
    }
    return true;
  }

  // sign up form validation
  function validateSignUpForm() {
    var username = document.forms["sign-up-form"]["username"].value;
    var email = document.forms["sign-up-form"]["email"].value;
    var password = document.forms["sign-up-form"]["password"].value;
  
    if (username === "" || email === "" || password === "") {
      alert("Please fill all the fields to sign Up.");
      return false;
    }
  
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address to Sign Up.");
      return false;
    }
  
    return true;
  }
  
  function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  
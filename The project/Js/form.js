document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelector(".form-signin").classList.toggle("form-signin-left");
    document.querySelector(".form-signup").classList.toggle("form-signup-left");
    document.querySelector(".frame").classList.toggle("frame-long");
    document
      .querySelector(".signup-inactive")
      .classList.toggle("signup-active");
    document
      .querySelector(".signin-active")
      .classList.toggle("signin-inactive");
    document.querySelector(".forgot").classList.toggle("forgot-left");
    this.classList.remove("idle");
    this.classList.add("active");
  });
});

document.querySelectorAll(".btn-signin").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelector(".btn-animate").classList.toggle("btn-animate-grow");
    document.querySelector(".welcome").classList.toggle("welcome-left");
    document.querySelector(".cover-photo").classList.toggle("cover-photo-down");
    document.querySelector(".frame").classList.toggle("frame-short");
    document
      .querySelector(".profile-photo")
      .classList.toggle("profile-photo-down");
    document.querySelector(".btn-goback").classList.toggle("btn-goback-up");
    document.querySelector(".forgot").classList.toggle("forgot-fade");
  });
});

//Validation part:--------------------------------------------------

let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("cpassword");
let alert1 = document.getElementById("alert1");

function handleInput() {
  let userNameValue = userName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let confirmPasswordValue = confirmPassword.value.trim();

  if (userNameValue === "") {
    alert1.innerHTML = "aDXASFSAGDFS";
  } else {
  }

  if (emailValue === "") {
    alert2.innerHTML = "aDXASFSAGDFS";
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  // Checking for password
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 6 || passwordValue.length > 30) {
    setErrorFor(password, "Password length should be between 6 and 30");
  } else {
    setSuccessFor(password);
  }

  // Checking for confirm password
  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Confirm Password cannot be blank");
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, "Confirm password not matched with password");
  } else {
    setSuccessFor(confirmPassword);
  }
}

// To check if email is valid or not ?
function isEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// document.getElementById("Signup").addEventListener("click", function () {
//   document.querySelector(".nav").classList.toggle("nav-up");
//   document
//     .querySelector(".form-signup-left")
//     .classList.toggle("form-signup-down");
//   document.querySelector(".success").classList.toggle("success-left");
//   document.querySelector(".frame").classList.toggle("frame-short");
// });

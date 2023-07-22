var signUp = document.querySelector("#signUp");

function validUsername() {
  const usernameInput = document.getElementById("usernameSignUp");
  const username = usernameInput.value;

  const regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(username)) {
    usernameInput.setCustomValidity(
      "Username cannot contain special characters"
    );
  } else {
    usernameInput.setCustomValidity("");
  }
}

function validPassword() {
  const passwordInput = document.getElementById("passwordSignUp");
  const password = passwordInput.value;

  const regex = /^(?=.*[A-Z]).{7,}$/;
  if (!regex.test(password)) {
    passwordInput.setCustomValidity(
      "Password must be at least 7 characters in length and contain an uppercase letter"
    );
  } else {
    passwordInput.setCustomValidity("");
  }
}

signUp.addEventListener("submit");

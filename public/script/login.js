var btn = document.getElementById("submit");

btn.addEventListener("click", (event) => {
  var inputedPassword = document.getElementById("password").value;
  var username = document.getElementById("username").value;

  username = username.trim();

  if (inputedPassword.length === 0) {
    event.preventDefault();
    document.getElementById("password-error").style.display = "block";
    document.getElementById("password-error").innerText =
      "Enter your Password into this field";
  } else {
    if (inputedPassword.length < 8) {
      event.preventDefault();
      document.getElementById("password-error").style.display = "block";
      document.getElementById("password-error").innerText =
        "You password must be at least 8 character.";
    } else {
      document.getElementById("password-error").style.display = "none";
    }
  }

  if (username.length === 0) {
    event.preventDefault();
    document.getElementById("name-error").style.display = "block";
    document.getElementById("name-error").innerText =
      "Input you Usename in the field";
  }
});

var eye = document.getElementById("eye");

eye.addEventListener("click", (event) => {
  var password = document.getElementById("password");
  console.log(password.getAttribute("type"));
  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
    eye.setAttribute("src", "./images/eye-svgrepo-com.svg");
  } else {
    password.setAttribute("type", "password");
    eye.setAttribute("src", "./images/eye-closed-svgrepo-com.svg");
  }
});

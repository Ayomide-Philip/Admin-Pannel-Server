setInterval(getTime, 1000);

function getTime() {
  const date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hour = date.getHours();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  } else {
    seconds = `${seconds}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  } else {
    minutes = `${minutes}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  } else {
    hour = `${hour}`;
  }
  document.getElementById(
    "current-time"
  ).innerHTML = `${hour}:${minutes}:${seconds}`;
}

const date = new Date().getHours();

if (0 <= date && date <= 11) {
  document.getElementById("day-time").innerHTML = `Good Morning Admin`;
} else if (12 <= date && date <= 18) {
  document.getElementById("day-time").innerHTML = `Good Afternoon Admin`;
} else if (19 <= date && date <= 23) {
  document.getElementById("day-time").innerHTML = `Good Evening Admin`;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  var inputedName = document.getElementById("name").value;
  var inputedMessage = document.getElementById("message").value;
  
  inputedMessage = inputedMessage.trim();
  inputedName = inputedName.trim();

  if (inputedName.length === 0) {
    event.preventDefault();
    document.getElementById("name-error").style.display = "block";
    document.getElementById("name-error").innerText =
      "Enter your name into this field";
  } else {
    if (inputedName.indexOf(" ") < 0) {
      event.preventDefault();
      document.getElementById("name-error").style.display = "block";
      document.getElementById("name-error").innerText =
        "You only Inputed your Surname or Lastname";
    } else {
      document.getElementById("name-error").style.display = "none";
    }
  }

  if (inputedMessage.length === 0) {
    event.preventDefault();
    document.getElementById("message-error").style.display = "block";
    document.getElementById("message-error").innerText =
      "Input your message into the field.";
  } else {
    if (inputedMessage.length < 20) {
      event.preventDefault();
      console.log(inputedMessage.length);
      document.getElementById("message-error").style.display = "block";
      document.getElementById(
        "message-error"
      ).innerText = `You need at least 20 letter word, it remains ${
        20 - inputedMessage.length
      }.`;
    } else {
      document.getElementById("message-error").style.display = "none";
    }
  }
});

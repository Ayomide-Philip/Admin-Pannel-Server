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

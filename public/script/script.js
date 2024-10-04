console.log(name);

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

document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event);
  var myChart = document.getElementById("myChart").getContext("2d");

  new Chart(myChart, {
    type: "pie",
    data: {
      labels: ["Contacts", "Student Admission", "Testimonials"],
      datasets: [
        {
          label: "School Statitics",
          data: [12, 19, 3],
          borderWidth: 1,
          backgroundColor: ["purple", "grey", "black"],
          hoverBackgroundColor: "green",
        },
      ],
    },
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  var studentChart = document.getElementById("student-class").getContext("2d");

  new Chart(studentChart, {
    type: "bar",
    data: {
      labels: ["JSS1", "JSS2", "SS1", "SS2"],
      datasets: [
        {
          label: "New Student Statitics",
          data: [12, 19, 3, 5],
          borderWidth: 1,
          backgroundColor: ["#3c3c3c", "#616161", "#787878", "#b4b4b4"],
          hoverBackgroundColor: "green",
        },
      ],
    },
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  var studentChart = document.getElementById("new-student").getContext("2d");

  new Chart(studentChart, {
    type: "line",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "All Student Birthday Month",
          data: [10, 30, 15, 23, 35, 54, 26, 43, 23, 43, 56, 53],
          borderWidth: 1,
          backgroundColor: "rgb(75, 192, 192)",
          hoverBackgroundColor: "green",
          borderColor: "rgb(75, 192, 192)",
        },
      ],
    },
  });
});

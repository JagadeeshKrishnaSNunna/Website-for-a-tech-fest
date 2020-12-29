let events = document.getElementById("eventDetails");
let queries = document.getElementById("queries");
let cards = document.getElementsByClassName("adminCards")[0];

function showEvents() {
  cards.style.display = "none";
  document.getElementById("goBack").style.display = "block";

  fetch("/getEvents", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      var innerHTML = "";
      innerHTML =
        "<table class='table table-dark'><thead>" +
        "<tr><th scope='col'>#</th>" +
        "<th scope='col'>Name</th>" +
        "<th scope='col'>Email</th>" +
        "<th scope='col'>Event</th>" +
        "<th scope='col'>College</th>" +
        "<th scope='col'>Team Size</th></tr></thead>" +
        "<tbody>";
      for (let i in res) {
        console.log(res[i]);
        innerHTML +=
          "<tr><th scope='row'>" +
          (Number(i) + 1) +
          "</th>" +
          "<td>" +
          res[i].Name +
          "</td>" +
          "<td>" +
          res[i].email +
          "</td>" +
          "<td>" +
          res[i].event +
          "</td>" +
          "<td>" +
          res[i].college +
          "</td>" +
          "<td>" +
          res[i].team +
          "</td></tr>";
      }
      innerHTML += "</tbody></table>";
      events.innerHTML = innerHTML;
    });
}

function showQueries() {
  cards.style.display = "none";
  document.getElementById("goBack").style.display = "block";
  //queries.innerHTML = "YEAAA BOIII QUERIESS!!";
  fetch("/getQueries", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      var innerHTML = "";
      innerHTML =
        "<table class='table table-dark'><thead>" +
        "<tr><th scope='col'>#</th>" +
        "<th scope='col'>Name</th>" +
        "<th scope='col'>Email</th>" +
        "<th scope='col'>Event</th>" +
        "<th scope='col'>Mobile</th>" +
        "<th scope='col'>Query</th></tr></thead>" +
        "<tbody>";
      for (let i in res) {
        console.log(res[i]);
        innerHTML +=
          "<tr><th scope='row'>" +
          (Number(i) + 1) +
          "</th>" +
          "<td>" +
          res[i].Name +
          "</td>" +
          "<td>" +
          res[i].email +
          "</td>" +
          "<td>" +
          res[i].natureOfQuery+
          "</td>" +
          "<td>" +
          res[i].mobile +
          "</td>" +
          "<td>" +
          res[i].query +
          "</td></tr>";
      }
      innerHTML += "</tbody></table>";
      events.innerHTML = innerHTML;
    });
}

function goBack() {
  cards.style.display = "flex";
  document.getElementById("goBack").style.display = "none";
  events.innerHTML = "";
  queries.innerHTML = "";
}

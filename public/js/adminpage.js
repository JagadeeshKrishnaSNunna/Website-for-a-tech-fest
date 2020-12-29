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
      console.log(res);
      for (let i in res) {
        console.log(res[i]);
        events.innerHTML += JSON.stringify(res[i]);
      }
    });
}

function showQueries() {
  cards.style.display = "none";
  document.getElementById("goBack").style.display = "block";
  queries.innerHTML = "YEAAA BOIII QUERIESS!!";
}

function goBack() {
  cards.style.display = "flex";
  document.getElementById("goBack").style.display = "none";
  events.innerHTML = "";
  queries.innerHTML = "";
}

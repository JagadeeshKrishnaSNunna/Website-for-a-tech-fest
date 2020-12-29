let events = document.getElementById("eventDetails");
let queries = document.getElementById("queries");
let cards = document.getElementsByClassName("adminCards")[0];

function showEvents() {
    cards.style.display = "none";
    document.getElementById("goBack").style.display = "block";
    events.innerHTML = "YEAAA BOIII EVENTSS!"
}

function showQueries() {
    cards.style.display = "none";
    document.getElementById("goBack").style.display = "block";
    queries.innerHTML = "YEAAA BOIII QUERIESS!!"
}

function goBack() {
    cards.style.display = "flex";
    document.getElementById("goBack").style.display = "none";
    events.innerHTML = "";
    queries.innerHTML = "";
}
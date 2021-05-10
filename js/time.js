var dateTime = document.getElementById("datetime");

function time() {
  var dt = new Date();
  dateTime.innerHTML = dt.toLocaleString();
}

setInterval(time,1000);


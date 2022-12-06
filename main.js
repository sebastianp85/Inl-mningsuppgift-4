function onoff() {
  currentvalue = document.getElementById("button").value;
  if (currentvalue == "OFF") {
    document.getElementById("button").value = "ON";
  } else {
    document.getElementById("button").value = "OFF";
  }
}

function hide(hidden) {
  hidden.style.display = "none";
}

function hideShowDiv(val) {
  if (val === 1) {
    document.getElementById("title").style.display = "none";
  }
  if (val === 2) {
    document.getElementById("title").style.display = "block";
  }
}

function warning() {
  let usertext = document.getElementById("usertext").value;
  if (usertext === "") {
    alert("Du skulle ju inte skriva här!");
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

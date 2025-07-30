let red,
  blue,
  green,
  yellow = false;

function toggleRed() {
  red = !red;
  if (red) {
    document.getElementById("red").classList.add("red");
  } else {
    document.getElementById("red").classList.remove("red");
  }
}

function toggleBlue() {
  blue = !blue;
  if (blue) {
    document.getElementById("blue").classList.add("blue");
  } else {
    document.getElementById("blue").classList.remove("blue");
  }
}

function toggleGreen() {
  green = !green;
  if (green) {
    document.getElementById("green").classList.add("green");
  } else {
    document.getElementById("green").classList.remove("green");
  }
}

function toggleYellow() {
  yellow = !yellow;
  if (yellow) {
    document.getElementById("yellow").classList.add("yellow");
  } else {
    document.getElementById("yellow").classList.remove("yellow");
  }
}

function displayName() {
  let name_text = document.getElementById("name_text");
  let name_value = name_text.value;

  let name_span = document.getElementById("name");
  name_span.innerHTML = ", " + name_value;
}

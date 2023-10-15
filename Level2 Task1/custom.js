let screen = document.getElementById("result");
let buffer = "";

function appendToScreen(value) {
  buffer += value;
  screen.innerHTML = buffer;
}

function clearScreen() {
  buffer = "";
  screen.innerHTML = "0";
}

function calculateResult() {
  try {
    buffer = eval(buffer);
    screen.innerHTML = buffer;
  } catch (error) {
    screen.innerHTML = "Error";
  }
}
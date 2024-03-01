let screen = document.getElementById('screen');
let currentInput = '';

function appendCharacter(char) {
  if (char === '=') {
    calculate();
  } else {
    currentInput += char;
    updateScreen();
  }
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateScreen();
}

function clearScreen() {
  currentInput = '';
  updateScreen();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateScreen();
  } catch (error) {
    currentInput = 'Error';
    updateScreen();
  }
}

function updateScreen() {
  screen.innerText = currentInput;
}

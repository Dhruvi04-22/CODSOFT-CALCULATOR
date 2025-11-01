let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
  display.scrollLeft = display.scrollWidth;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateValue() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'ERROR';
  }
}

// Keyboard Support - user can enter input through keys

document.addEventListener('keydown', function(event) {
  const key = event.key; 

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '%', '.'].includes(key)) {
    appendValue(key);
  } 

  else if (key === 'Enter' || key === '=') {
    calculateValue();
  } 

  else if (key === 'Backspace') {
    deleteLast();
  } 

  else if (key === 'Escape' || key === 'Delete' || key === 'c' || key === 'C' ) {
    clearDisplay();
  }
});


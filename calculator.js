let currentDisplay = '';
const display = document.querySelector('#display');

function updateDisplay(value) {
    currentDisplay = value;
    display.value = currentDisplay;
}

function appendValue(value) {
    currentDisplay += value;
    display.value = currentDisplay;
}

function clearDisplay() {
    updateDisplay('');
}

function calculate() {
    try {
        // Replace unsafe eval with a safer implementation
        const result = Function('"use strict";return (' + currentDisplay + ')')();
        if (isFinite(result)) {
            updateDisplay(result.toString());
        } else {
            updateDisplay('Error');
        }
    } catch (error) {
        updateDisplay('Error');
    }
}

// Initialize display
document.addEventListener('DOMContentLoaded', () => {
    display.value = currentDisplay;
});

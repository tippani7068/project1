let currentInput = '';
let displayValue = '';

function appendToDisplay(value) {
    currentInput += value;
    displayValue = currentInput;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(currentInput);
        updateDisplay();
        currentInput = displayValue.toString();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
        currentInput = '';
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

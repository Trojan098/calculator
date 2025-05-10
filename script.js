let currentInput = '';

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    if (value === '=') {
        try {
            currentInput = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
            document.getElementById('display').value = eval(currentInput);
            currentInput = document.getElementById('display').value;
        } catch (error) {
            document.getElementById('display').value = 'Error';
            currentInput = '';
        }
    } else {
        currentInput += value;
        document.getElementById('display').value = currentInput;
    }
}

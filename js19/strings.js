function getInput() {
    return document.getElementById('inputString').value;
}

function setResult(result) {
    document.getElementById('resultString').value = result;
}

function toUpperCase() {
    const input = getInput();
    setResult(input.toUpperCase());
}

function toLowerCase() {
    const input = getInput();
    setResult(input.toLowerCase());
}

function trimString() {
    const input = getInput();
    setResult(input.trim());
}

function reverseString() {
    const input = getInput();
    setResult(input.split('').reverse().join(''));
}

function charCount() {
    const input = getInput();
    setResult(`Character Count: ${input.length}`);
}

function resetFields() {
    document.getElementById('inputString').value = '';
    document.getElementById('resultString').value = '';
}
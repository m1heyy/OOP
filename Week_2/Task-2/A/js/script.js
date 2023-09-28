function calculateSquareRoot() {
    let userInput = document.getElementById('numberInput').value;

    if (isNaN(userInput)) {
        alert('Пожалуйста, введите корректное число.');
        return;
    }

    let number = parseFloat(userInput);
    let guess = number / 2;

    while (Math.abs(guess * guess - number) > 0.0001) {
        guess = (guess + number / guess) / 2;
    }

    document.getElementById('resultText').innerText = `Квадратный корень из ${number.toFixed(4)}: ${guess.toFixed(4)}`;
}
function findPrimes() {
    const inputNumber = document.getElementById("inputNumber").value;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";

    if (inputNumber <= 1) {
        resultElement.innerHTML = "Введите число больше 1.";
        return;
    }

    const primes = [];
    for (let num = 2; num < inputNumber; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        }
        if (isPrime) {
        primes.push(num);
        }
    }


    resultElement.innerHTML = `Простые числа до ${inputNumber}: ${primes.join(", ")}`;
}
function calculateMedian() {
    const inputElement = document.getElementById("numbers");
    const resultElement = document.getElementById("result");
    
    const input = inputElement.value.trim();
    const numbersArray = input.split(",").map(Number);

    
    numbersArray.sort((a, b) => a - b);

    let median;

    
    if (numbersArray.length % 2 === 1) {
        const middleIndex = Math.floor(numbersArray.length / 2);
        median = numbersArray[middleIndex];
    }

    else {
        const middleIndex1 = numbersArray.length / 2 - 1;
        const middleIndex2 = numbersArray.length / 2;
        median = (numbersArray[middleIndex1] + numbersArray[middleIndex2]) / 2;
    }

    resultElement.textContent = `Медиана: ${median}`;
}
function countMaxNumbers() {
    const inputNumbers = document.getElementById('inputNumbers').value;
    const numbersArray = inputNumbers.split(' ').map(Number);

    if (numbersArray.length === 0 || inputNumbers === '') {
        document.getElementById('result').textContent = 'Введите хотя бы одно число';
        return;
    }

    const maxNumber = Math.max(...numbersArray);
    const count = numbersArray.filter(num => num === maxNumber).length;

    document.getElementById('result').textContent = `Количество чисел, равных максимальному (${maxNumber}): ${count}`;
}
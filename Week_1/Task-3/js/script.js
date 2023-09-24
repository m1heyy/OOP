function calculateVolume() {
    // Получаем значение длины ребра из поля ввода
    const edgeLength = parseFloat(document.getElementById("edgeLength").value);

    // Проверяем, что введено число
    if (!isNaN(edgeLength)) {
        // Вычисляем объем икосаэдра
        const volume = (5 / 12) * (3 + Math.sqrt(5)) * Math.pow(edgeLength, 3);

        // Выводим результат на страницу
        document.getElementById("result").textContent = `Объем икосаэдра: ${volume.toFixed(2)}`;
    } else {
        alert("Пожалуйста, введите корректное число для длины ребра.");
    }
}
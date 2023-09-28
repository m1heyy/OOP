function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function calculateDays() {
    const monthInput = document.getElementById('monthInput');
    const resultElement = document.getElementById('result');
    const month = parseInt(monthInput.value);

    if (month >= 1 && month <= 12) {
        const daysInMonth = [31, isLeapYear(new Date().getFullYear()) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const days = daysInMonth[month - 1];
        resultElement.textContent = `В месяце ${month} ${days} дней.`;
    } else {
        resultElement.textContent = 'Пожалуйста, введите корректный номер месяца (от 1 до 12).';
    }
}
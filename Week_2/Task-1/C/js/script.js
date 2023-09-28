function decide() {
    const selectedDay = document.getElementById("day").value;
    const selectedWeather = document.getElementById("weather").value;

    if (selectedDay === "Sunday" && (selectedWeather === "sunny" || selectedWeather === "Cool and clear" )) {
        document.getElementById("result").textContent = "Да, давайте поиграем в бадминтон!";
    } else {
        document.getElementById("result").textContent = "Сейчас не подходящее время, чтобы играть в бадминтон.";
    }
}
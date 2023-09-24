document.addEventListener("DOMContentLoaded", function() {
    let userName = prompt('Введите имя пользователя:');
    alert(`Привет, ${userName}!`);

    let output = document.getElementById("output");
    output.innerText = `Привет, ${userName}!`;
});

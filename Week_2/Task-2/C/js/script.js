function drawPyramid(height) {
    const canvas = document.getElementById('pyramidCanvas');
    const ctx = canvas.getContext('2d');
    const brickWidth = 40;
    const brickHeight = 20;
    const pyramidBaseWidth = brickWidth * height;
    const xStart = (canvas.width - pyramidBaseWidth) / 2;
    const yStart = canvas.height - brickHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < height; row++) {
        const bricksInRow = height - row;
        const xOffset = (pyramidBaseWidth - bricksInRow * brickWidth) / 2;

        for (let brick = 0; brick < bricksInRow; brick++) {
            const x = xStart + xOffset + brick * brickWidth;
            const y = yStart - row * brickHeight;
            
            ctx.fillStyle = 'orange'; 
            ctx.fillRect(x, y, brickWidth, brickHeight);

            ctx.strokeStyle = 'black'; 
            ctx.strokeRect(x, y, brickWidth, brickHeight);
        }
    }
}

document.getElementById('drawButton').addEventListener('click', function () {
    const heightInput = document.getElementById('heightInput');
    const height = parseInt(heightInput.value);

    if (!isNaN(height) && height > 0) {
        drawPyramid(height);
    } else {
        alert('Введите корректную высоту пирамиды.');
    }
});
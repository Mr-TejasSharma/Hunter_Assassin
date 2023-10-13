
// Initializing Canvas
const canvas = document.getElementById("maze");
const ctx = canvas.getContext("2d");
const cell = 30;
canvas.width = mazeWall[0].length * cell;
canvas.height = mazeWall.length * cell;
// Enemies

// const enemy1 = new Enemy(510, 30, "left");
// const enemy2 = new Enemy(120, 270, "up");
// const enemy3 = new Enemy(180, 210, "down");
// const enemy4 = new Enemy(270, 450, "right");
// const enemy5 = new Enemy(30, 570, "up");
// const enemy6 = new Enemy(510, 270, "left");
// let enemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
const initialPositions = [
    { x: 510, y: 30, direction: "left" },
    { x: 120, y: 270, direction: "up" },
    { x: 180, y: 210, direction: "down" },
    { x: 270, y: 450, direction: "right" },
    { x: 30, y: 570, direction: "up" },
    { x: 510, y: 270, direction: "left" }
];
let enemies = initialPositions.map(position => new Enemy(position.x, position.y, position.direction));


// Images
const wallImage = new Image();

wallImage.src = './Assets/Background/images.png';

const cellImage = new Image();
cellImage.src = './Assets/Background/images (2).jpeg';

const heroImage = new Image();
heroImage.src = './Assets/Hero/hero1.png';



let GameOver = false;
let gameRunning = true;

function drawGameOverScreen(choice) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#FF5733";
    ctx.font = "bold 64px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 3;
    let message;
    if (choice == 1) {
        message = "You Won!!!";
    }
    else if (choice == 2) {
        message = "Game Over!";
    }
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2, 200, 50);
    ctx.strokeText(message, canvas.width / 2, canvas.height / 2 - 50);
    ctx.fillText(message, canvas.width / 2, canvas.height / 2 - 50);

    ctx.fillStyle = "white";
    ctx.font = "bold 32px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Restart Game", canvas.width / 2, canvas.height / 2 + 25, 180);
    ctx.lineWidth = 1;
    ctx.strokeText("Restart Game", canvas.width / 2, canvas.height / 2 + 25, 180);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.strokeRect(canvas.width / 2 - 100, canvas.height / 2, 200, 50);

}




canvas.addEventListener("click", function (event) {
    if (GameOver) {
        let mouseX = event.clientX - canvas.offsetLeft;
        let mouseY = event.clientY - canvas.offsetTop;
        if (mouseX >= canvas.width / 2 - 100 &&
            mouseX <= canvas.width / 2 + 100 &&
            mouseY >= canvas.height / 2 &&
            mouseY <= canvas.height / 2 + 50) {
            restartClicked();
        }
    }
});

let i = 100;

function update() {
    clearCanvas();
    renderMaze();

    drawHealthBar();
    drawEnemy();
    drawPlayer();
    updateEnemies();
    updatePlayer();
    drawScore();
    if (gameRunning)
        requestAnimationFrame(update);
};


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);
update();

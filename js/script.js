
// Initializing Canvas
const canvas = document.getElementById("maze");
const ctx = canvas.getContext("2d");
const cell = 30;
canvas.width = mazeWall[0].length * cell;
canvas.height = mazeWall.length * cell;
// Enemies

const enemy1 = new Enemy(510, 30, "left");
const enemy2 = new Enemy(120, 270, "up");
const enemy3 = new Enemy(180, 210, "down");
const enemy4 = new Enemy(270, 450, "right");
const enemy5 = new Enemy(30, 570, "up");
const enemy6 = new Enemy(510, 270, "left");
const enemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
// Images
const wallImage = new Image();

let enemyDead = false;

wallImage.src = './Assets/Background/images.png';

const cellImage = new Image();
cellImage.src = './Assets/Background/images (2).jpeg';

const heroImage = new Image();
heroImage.src = './Assets/Hero/hero1.png';


function drawScore() {
    ctx.font = "bold 24px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + Player.score, 2, 22);
}


function update() {
    clearCanvas();
    renderMaze();
    drawScore();
    drawEnemy();
    drawPlayer();
    updateEnemies();
    updatePlayer();
    requestAnimationFrame(update);
};

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);
update();

import { mazeWall } from './maze.js';
import Enemy from './enemy.js';
import { hero, handleKeydown, handleKeyup, updateHero } from './hero.js';
import { detectEnemy } from './enemyDetection.js';
import { killEnemy } from './enemyKill.js';

const enemy1 = new Enemy(510, 30, "left");
const enemy2 = new Enemy(120, 270, "up");
const enemy3 = new Enemy(180, 210, "down");
const enemy4 = new Enemy(270, 450, "right");
const enemy5 = new Enemy(30, 570, "up");
const enemy6 = new Enemy(510, 270, "left");

const wallImage = new Image();
wallImage.src = './Assets/Background/images.png';

const cellImage = new Image();
cellImage.src = './Assets/Background/images (2).jpeg';

const heroImage = new Image();
heroImage.src = './Assets/Hero/hero1.png';



let enemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

let updateEnemies = () => {
    for (let enemy of enemies) {
        enemy.updateEnemy();
        killEnemy(enemy);

    }
};

const canvas = document.getElementById("maze");
const ctx = canvas.getContext("2d");

const cell = 30;

let renderMaze = () => {

    for (let i = 0; i < mazeWall.length; i++) {
        for (let j = 0; j < mazeWall[i].length; j++) {
            if (mazeWall[i][j] === '#') {
                //ctx.fillRect(j * cell, i * cell, cell, cell);

                if (wallImage.complete && wallImage.naturalWidth !== 0) {
                    ctx.drawImage(wallImage, j * cell, i * cell, cell, cell);
                }
                else {
                    ctx.fillStyle = "black";
                    ctx.fillRect(j * cell, i * cell, cell, cell);
                }
            }
            else if (mazeWall[i][j] === '.') {
                if (cellImage.complete && cellImage.naturalWidth !== 0) {
                    ctx.drawImage(cellImage, j * cell, i * cell, cell, cell);
                }
            }
        }
    }
};

let drawHero = () => {

    ctx.beginPath();
    ctx.arc(hero.x + 10, hero.y + 10, hero.width / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    // ctx.fillStyle = "blue";
    //ctx.fillRect(hero.x, hero.y, hero.width, hero.height);

};

let drawEnemy = () => {
    for (let enemy of enemies) {
        if (enemy.alive) {
            ctx.beginPath();
            ctx.arc(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, enemy.width / 2, 0, 2 * Math.PI);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 5;
            ctx.stroke();
            // ctx.fillStyle = "red";
            // ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        }
    }
};

let enemyDead = false;

let update = () => {
    clearCanvas();
    renderMaze();
    drawEnemy();
    drawHero();
    updateEnemies();
    updateHero();
    requestAnimationFrame(update);
};

let clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

canvas.width = mazeWall[0].length * cell;
canvas.height = mazeWall.length * cell;

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);
update();

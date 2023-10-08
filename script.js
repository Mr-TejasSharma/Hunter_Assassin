import { mazeWall } from './maze.js';
import { enemy, updateEnemy } from './enemy.js';
import { hero, handleKeydown, handleKeyup, updateHero } from './hero.js';
import { detectEnemy } from './enemyDetection.js';
import { killEnemy } from './enemyKill.js';

const canvas = document.getElementById("maze");
const ctx = canvas.getContext("2d");

const cell = 30;

let renderMaze = () => {
    ctx.fillStyle = "black";
    for (let i = 0; i < mazeWall.length; i++) {
        for (let j = 0; j < mazeWall[i].length; j++) {
            if (mazeWall[i][j] === '#') {
                ctx.fillRect(j * cell, i * cell, cell, cell);
            }
        }
    }
};

let drawHero = () => {
    ctx.fillStyle = "blue";
    ctx.fillRect(hero.x, hero.y, hero.width, hero.height);
    if (detectEnemy)
        ctx.fillStyle = "green";
};

let drawEnemy = () => {
    ctx.fillStyle = "red";
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
};

let enemyDead = false;
if (killEnemy())
    enemyDead = true;

let update2 = () => {
    if (killEnemy())
        enemyDead = true;
    if (!enemyDead)
        drawEnemy();
    updateEnemy();
    //detectEnemy();
    requestAnimationFrame(update2);
};

let update = () => {
    clearCanvas();
    renderMaze();
    drawHero();
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
// setInterval(update2, 500);
update();
update2();

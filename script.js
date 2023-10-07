import { mazeWall } from './maze.js';
import { hero, handleKeydown, handleKeyup, updateHero } from './hero.js';

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
update();

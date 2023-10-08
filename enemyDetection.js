import { enemy } from './enemy.js';
import { hero } from './hero.js';

export let detectEnemy = () => {

    let rangeX = enemy.x + 150;
    let rangeY = enemy.y + 150;

    if (enemy.direction === "right") {

        if (rangeX + 30 <= hero.x && enemy.y >= hero.y && enemy.y <= hero.y + 30) {
            enemy.dx = 2;
            enemy.dy = 0;
        }

    } else if (enemy.direction === "left") {
        rangeX *= -1;
        if (rangeX <= hero.x + 30 && enemy.y >= hero.y && enemy.y <= hero.y + 30) {
            enemy.dx = -2;
            enemy.dy = 0;
        }
    } else if (enemy.direction === "up") {
        rangeY *= -1;
        if (rangeY <= hero.y && enemy.x >= hero.x && enemy.x <= hero.x + 30) {
            enemy.dx = 0;
            enemy.dy = -2;
        }
    } else if (enemy.direction === "up") {
        if (rangeY + 30 <= hero.y && enemy.x >= hero.x && enemy.x <= hero.x + 30) {
            enemy.dx = 0;
            enemy.dy = 2;
        }
    }

    enemy.x += enemy.dx;
    enemy.y += enemy.dy;

};
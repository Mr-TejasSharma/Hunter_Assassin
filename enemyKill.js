import { hero } from './hero.js';
//import { enemy1, enemy2, enemy3, enemy4, enemy5, enemy6 } from './script.js';


export let killEnemy = (enemy) => {
    if (enemy.alive && hero.x + 30 > enemy.x &&
        hero.x < enemy.x + 30 &&
        hero.y + 30 > enemy.y &&
        hero.y < enemy.y + 30) {
        enemy.alive = false;
    }

};
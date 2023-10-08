import { enemy } from './enemy.js';
import { hero } from './hero.js';

export let killEnemy = () => {

    return (hero.x + 30 > enemy.x && hero.x < enemy.x + 30 && hero.y + 30 > enemy.y && hero.y < enemy.y + 30);

};
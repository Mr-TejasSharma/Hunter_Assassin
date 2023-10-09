import Enemy from './enemy.js';
import { hero } from './hero.js';
import { mazeWall } from './maze.js';

// let checkWall = () => {

//     let x1 = hero.x;
//     let y1 = hero.y;
//     let x2 = enemy.x;
//     let y2 = enemy.y;

//     console.log(x1 + " " + y1);

//     x1 /= 30;
//     x2 /= 30;
//     y1 /= 30;
//     y2 /= 30;

//     if (x1 >= x2 && x1 <= x2 && x1 + 30 >= x2 && x1 <= x2 + 30) {
//         let i = y1;
//         if (enemy.direction === "up") {
//             while (i <= y2) {
//                 if (mazeWall[x2][i] === "#")
//                     return false;
//                 i++;
//             }
//         }
//         else {
//             while (i >= y2) {
//                 if (mazeWall[x2][i] === "#")
//                     return false;
//                 i--;
//             }
//         }
//         return true;
//     }
//     else if (y1 >= y2 && y1 <= y2 && y1 + 30 >= y2 && y1 <= y2 + 30) {
//         let i = x1;
//         if (enemy.direction === "left") {
//             while (i <= x2) {
//                 if (mazeWall[i][y2] === "#")
//                     return false;
//                 i++;
//             }
//         }
//         else {
//             while (i >= x2) {
//                 if (mazeWall[i][y2] === "#")
//                     return false;
//                 i--;
//             }
//         }
//         return true;


//     };
// };

export let detectEnemy = (enemy) => {

    let rangeX = enemy.x + 150;
    let rangeY = enemy.y + 150;

    if (enemy.direction === "right") {

        if (rangeX + 30 <= hero.x && enemy.y >= hero.y && enemy.y <= hero.y + 30) {
            hero.health -= 10;
            enemy.dx = 2;
            enemy.dy = 0;
        }

    } else if (enemy.direction === "left") {
        rangeX *= -1;
        if (rangeX <= hero.x + 30 && enemy.y >= hero.y && enemy.y <= hero.y + 30) {
            hero.health -= 10;
            enemy.dx = -2;
            enemy.dy = 0;
        }
    } else if (enemy.direction === "up") {
        rangeY *= -1;
        if (rangeY <= hero.y + 30 && enemy.x >= hero.x && enemy.x <= hero.x + 30) {
            hero.health -= 10;
            enemy.dx = 0;
            enemy.dy = -2;
        }
    } else if (enemy.direction === "up") {
        if (rangeY + 30 <= hero.y && enemy.x >= hero.x && enemy.x <= hero.x + 30) {
            hero.health -= 10;
            enemy.dx = 0;
            enemy.dy = 2;
        }
    }

    //console.log(hero.health);

    // enemy.x += enemy.dx;
    // enemy.y += enemy.dy;

};

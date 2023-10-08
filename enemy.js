import { mazeWall } from "./maze.js";

export let enemy = {
    x: 510,
    y: 30,
    width: 30,
    height: 30,
    dx: -1,
    dy: 0,
    direction: "left",
};

// export let enemyMoving = () => {
//     if (enemy.direction === "left") {
//         enemy.dx = -3;
//     } else if (enemy.direction === "right") {
//         enemy.dx = 3;
//     } else if (enemy.direction === "up") {
//         enemy.dy = -3;
//     } else if (enemy.direction === "down") {
//         enemy.dy = 3;
//     }
// };

export let updateEnemy = () => {
    let nextX = enemy.x + enemy.dx;
    let nextY = enemy.y + enemy.dy;

    for (let i = 0; i < mazeWall.length; i++) {
        for (let j = 0; j < mazeWall[i].length; j++) {
            let cell = mazeWall[i][j];
            if (cell === '#') {
                let cellX = j * 30;
                let cellY = i * 30;

                if (
                    nextX < cellX + 30 &&
                    nextX + enemy.width > cellX &&
                    nextY < cellY + 30 &&
                    nextY + enemy.height > cellY
                ) {
                    let random = Math.random() * 10;

                    if (enemy.direction === "right") {
                        if (random >= 5) {
                            enemy.direction = "down";
                            enemy.dy = 3;
                            enemy.dx = 0;
                        }
                        else {
                            enemy.direction = "up";
                            enemy.dy = -3;
                            enemy.dx = 0;
                        }
                    } else if (enemy.direction === "down") {
                        if (random >= 5) {
                            enemy.direction = "left";
                            enemy.dy = 0;
                            enemy.dx = -3;
                        }
                        else {
                            enemy.direction = "right";
                            enemy.dy = 0;
                            enemy.dx = 3;
                        }
                    } else if (enemy.direction === "left") {
                        if (random >= 5) {
                            enemy.direction = "up";
                            enemy.dy = -3;
                            enemy.dx = 0;
                        }
                        else {
                            enemy.direction = "down";
                            enemy.dy = 3;
                            enemy.dx = 0;
                        }
                    } else if (enemy.direction === "up") {
                        if (random >= 5) {
                            enemy.direction = "right";
                            enemy.dy = 0;
                            enemy.dx = 3;
                        }
                        else {
                            enemy.direction = "left";
                            enemy.dy = 0;
                            enemy.dx = -3;
                        }
                    }
                }
            }
        }
    }

    enemy.x += enemy.dx;
    enemy.y += enemy.dy;
};




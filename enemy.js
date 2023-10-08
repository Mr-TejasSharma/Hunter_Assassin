import { mazeWall } from "./maze.js";

// export let this = {
//     x: 510,
//     y: 30,
//     width: 30,
//     height: 30,
//     dx: -1,
//     dy: 0,
//     direction: "left",
// };

export default class Enemy {

    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        if (direction === "up") {
            this.dx = 0;
            this.dy = -1;
        }
        else if (direction === "down") {
            this.dx = 0;
            this.dy = 1;
        }
        else if (direction === "left") {
            this.dx = -1;
            this.dy = 0;
        }
        else {
            this.dx = 1;
            this.dy = 0;
        }
        this.direction = direction;
        this.alive = true;
    }

    updateEnemy() {
        let nextX = this.x + this.dx;
        let nextY = this.y + this.dy;

        for (let i = 0; i < mazeWall.length; i++) {
            for (let j = 0; j < mazeWall[i].length; j++) {
                let cell = mazeWall[i][j];
                if (cell === '#') {
                    let cellX = j * 30;
                    let cellY = i * 30;

                    if (
                        nextX < cellX + 30 &&
                        nextX + this.width > cellX &&
                        nextY < cellY + 30 &&
                        nextY + this.height > cellY
                    ) {
                        let random = Math.random() * 10;

                        if (this.direction === "right") {
                            if (random >= 5) {
                                this.direction = "down";
                                this.dy = 1;
                                this.dx = 0;
                            }
                            else {
                                this.direction = "up";
                                this.dy = -1;
                                this.dx = 0;
                            }
                        } else if (this.direction === "down") {
                            if (random >= 5) {
                                this.direction = "left";
                                this.dy = 0;
                                this.dx = -1;
                            }
                            else {
                                this.direction = "right";
                                this.dy = 0;
                                this.dx = 1;
                            }
                        } else if (this.direction === "left") {
                            if (random >= 5) {
                                this.direction = "up";
                                this.dy = -1;
                                this.dx = 0;
                            }
                            else {
                                this.direction = "down";
                                this.dy = 1;
                                this.dx = 0;
                            }
                        } else if (this.direction === "up") {
                            if (random >= 5) {
                                this.direction = "right";
                                this.dy = 0;
                                this.dx = 1;
                            }
                            else {
                                this.direction = "left";
                                this.dy = 0;
                                this.dx = -1;
                            }
                        }
                    }
                }
            }
        }

        this.x += this.dx;
        this.y += this.dy;

    };

}


class Enemy {

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

                            if (random >= 3) {
                                this.direction = "down";
                                this.dy = 1;
                                this.dx = 0;
                            }
                            else if (random >= 7) {
                                this.direction = "left";
                                this.dy = 0;
                                this.dx = -1;
                            }
                            else {
                                this.direction = "up";
                                this.dy = -1;
                                this.dx = 0;
                            }
                        } else if (this.direction === "down") {
                            if (random >= 3) {
                                this.direction = "left";
                                this.dy = 0;
                                this.dx = -1;
                            }
                            else if (random >= 7) {
                                this.direction = "up";
                                this.dy = -1;
                                this.dx = 0;
                            }
                            else {
                                this.direction = "right";
                                this.dy = 0;
                                this.dx = 1;
                            }
                        } else if (this.direction === "left") {
                            if (random >= 3) {
                                this.direction = "up";
                                this.dy = -1;
                                this.dx = 0;
                            }
                            else if (random >= 7) {
                                this.direction = "right";
                                this.dy = 0;
                                this.dx = 1;
                            }
                            else {
                                this.direction = "down";
                                this.dy = 1;
                                this.dx = 0;
                            }
                        } else if (this.direction === "up") {
                            if (random >= 3) {
                                this.direction = "right";
                                this.dy = 0;
                                this.dx = 1;
                            }
                            else if (random >= 7) {
                                this.direction = "down";
                                this.dy = 1;
                                this.dx = 0;
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

function detectEnemy(enemy) {

    let rangeX = enemy.x + 150;
    let rangeY = enemy.y + 150;

    if (enemy.direction === "right") {

        if (rangeX + 30 <= Player.x && enemy.y >= Player.y && enemy.y <= Player.y + 30) {
            Player.health -= 10;
            enemy.dx = 2;
            enemy.dy = 0;
        }

    } else if (enemy.direction === "left") {
        rangeX *= -1;
        if (rangeX <= Player.x + 30 && enemy.y >= Player.y && enemy.y <= Player.y + 30) {
            Player.health -= 10;
            enemy.dx = -2;
            enemy.dy = 0;
        }
    } else if (enemy.direction === "up") {
        rangeY *= -1;
        if (rangeY <= Player.y + 30 && enemy.x >= Player.x && enemy.x <= Player.x + 30) {
            Player.health -= 10;
            enemy.dx = 0;
            enemy.dy = -2;
        }
    } else if (enemy.direction === "up") {
        if (rangeY + 30 <= Player.y && enemy.x >= Player.x && enemy.x <= Player.x + 30) {
            Player.health -= 10;
            enemy.dx = 0;
            enemy.dy = 2;
        }
    }
}


function killEnemy(enemy) {
    if (enemy.alive && Player.x + 30 > enemy.x &&
        Player.x < enemy.x + 30 &&
        Player.y + 25 > enemy.y &&
        Player.y < enemy.y + 30) {
        Player.score += 10;
        console.log(Player.score);
        const index = enemies.indexOf(enemy);
        if (index !== -1) {
            enemies.splice(index, 1);
        }
    }
}

function updateEnemies() {
    for (let enemy of enemies) {
        enemy.updateEnemy();
        killEnemy(enemy);

    }
}
function drawEnemy() {
    for (let enemy of enemies) {
        if (enemy.alive) {
            ctx.beginPath();
            ctx.arc(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, enemy.width / 2, 0, 2 * Math.PI);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 5;
            ctx.stroke();
        }
    }
};

// ------------------------------------------

function checkWall(x1, y1, x2, y2, direction) {
    x1 = Math.floor(x1 / 30);
    x2 = Math.floor(x2 / 30);
    y1 = Math.floor(y1 / 30);
    y2 = Math.floor(y2 / 30);
    if (direction == "left") {
        if (y1 != y2) {
            return true;
        }
        for (let i = x1; i < x2; i++) {
            if (mazeWall[y2][i] == '#')
                return true;
        }
        return false;
    }
    else if (direction == "right") {
        if (y1 != y2) {
            return true;
        }
        for (let i = x2; i < x1; i++) {
            if (mazeWall[y2][i] == '#')
                return true;
        }
        return false;
    }
    else if (direction == "up") {
        if (x1 != x2) {
            return true;
        }
        for (let i = y1; i < y2; i++) {
            if (mazeWall[i][x2] == '#')
                return true;
        }
        return false;
    }
    else if (direction == "right") {
        if (x1 != x2) {
            return true;
        }
        for (let i = y2; i < y1; i++) {
            if (mazeWall[i][x2] == '#')
                return true;
        }
        return false;
    }
};

function detectEnemy(enemy) {

    const range = 150;

    if (enemy.direction === "left") {
        if (enemy.x - range <= hero.x + hero.width && enemy.x >= hero.x + hero.width && !checkWall(hero.x, hero.y, enemy.x, enemy.y, enemy.direction)) {
            return true;
        }
    }
    else if (enemy.direction === "right") {
        if (enemy.x + enemy.width + range <= hero.x && hero.x >= enemy.x + enemy.width && !checkWall(hero.x, hero.y, enemy.x, enemy.y, enemy.direction)) {
            return true;
        }
    }
    else if (enemy.direction === "up") {
        if (enemy.y - range <= hero.y + hero.height && enemy.y >= hero.y + hero.height && !checkWall(hero.x, hero.y, enemy.x, enemy.y, enemy.direction)) {
            return true;
        }
    }
    else if (enemy.direction === "down") {
        if (enemy.y + enemy.height + range <= hero.y && hero.y >= enemy.y + enemy.height && !checkWall(hero.x, hero.y, enemy.x, enemy.y, enemy.direction)) {
            return true;
        }
    }
    else {
        return false;
    }


};

function killHero(enemies) {

    for (let enemy of enemies) {
        if (detectEnemy(enemy)) {
            console.log(hero.health);
            hero.health -= 1;
        }
    }


};
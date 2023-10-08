import { mazeWall } from './maze.js';

export let hero = {
  x: 30,
  y: 30,
  width: 30,
  height: 30,
  dx: 0,
  dy: 0,
};

export let handleKeydown = (event) => {
  if (event.key === "ArrowLeft" || event.key === "Left") {
    hero.dx = -3;
  } else if (event.key === "ArrowRight" || event.key === "Right") {
    hero.dx = 3;
  } else if (event.key === "ArrowUp" || event.key === "Up") {
    hero.dy = -3;
  } else if (event.key === "ArrowDown" || event.key === "Down") {
    hero.dy = 3;
  }
};

export let handleKeyup = (event) => {
  if (event.key === "ArrowLeft" || event.key === "Left" || event.key === "ArrowRight" || event.key === "Right") {
    hero.dx = 0;
  }
  if (event.key === "ArrowUp" || event.key === "Up" || event.key === "ArrowDown" || event.key === "Down") {
    hero.dy = 0;
  }
};

export let updateHero = () => {
  let nextX = hero.x + hero.dx;
  let nextY = hero.y + hero.dy;

  for (let i = 0; i < mazeWall.length; i++) {
    for (let j = 0; j < mazeWall[i].length; j++) {
      let cell = mazeWall[i][j];
      if (cell === '#') {
        let cellX = j * 30;
        let cellY = i * 30;

        if (
          nextX < cellX + 30 &&
          nextX + hero.width > cellX &&
          nextY < cellY + 30 &&
          nextY + hero.height > cellY
        ) {

          if (hero.dx > 0) {
            hero.dx = 0;
            //hero.x = cellX - hero.width;
          } else if (hero.dx < 0) {
            hero.dx = 0;
            //hero.x = cellX + 30;
          }

          if (hero.dy > 0) {
            hero.dy = 0;
            //hero.y = cellY - hero.height;
          } else if (hero.dy < 0) {

            hero.dy = 0;
            //hero.y = cellY + 30;
          }
        }
      }
    }
  }

  hero.x += hero.dx;
  hero.y += hero.dy;
};

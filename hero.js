import { mazeWall } from './maze.js';

export let hero = {
  x: 30,
  y: 30,
  width: 20,
  height: 20,
  dx: 0,
  dy: 0,
  health: 100,
  direction: "left",
  directionAngle: 0,
};

export let handleKeydown = (event) => {
  if (event.key === "ArrowLeft" || event.key === "Left") {
    hero.direction = "left";
    hero.dx = -2;
  } else if (event.key === "ArrowRight" || event.key === "Right") {
    hero.direction = "right";
    hero.dx = 2;
  } else if (event.key === "ArrowUp" || event.key === "Up") {
    hero.direction = "up";
    hero.dy = -2;
  } else if (event.key === "ArrowDown" || event.key === "Down") {
    hero.direction = "down";
    hero.dy = 2;
  }
};

// function heroRotation() {
//   switch (hero.direction) {
//     case 'left':
//       hero.rotationAngle = 270;
//       break;
//     case 'right':
//       hero.rotationAngle = 90;
//       break;
//     case 'up':
//       hero.rotationAngle = 0;
//       break;
//     case 'down':
//       hero.rotationAngle = 180;
//       break;
//     default:
//       break;
//   }
// }

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
  console.log(hero.x + " " + hero.y);
};

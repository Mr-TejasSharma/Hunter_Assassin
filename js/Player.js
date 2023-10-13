// let Player = {
//   x: 30,
//   y: 30,
//   width: 20,
//   height: 20,
//   dx: 0,
//   dy: 0,
//   health: 100,
//   // direction: "left",
//   // directionAngle: 0,
//   score: 0,
// };

let initialPlayerState = {
  x: 30,
  y: 30,
  width: 20,
  height: 20,
  dx: 0,
  dy: 0,
  health: 100,
  // direction: "left",
  // directionAngle: 0,
  score: 0,
};

let Player = { ...initialPlayerState };


function handleKeydown(event) {
  if (event.key === "ArrowLeft" || event.key === "Left") {
    Player.direction = "left";
    Player.dx = -2;
  } else if (event.key === "ArrowRight" || event.key === "Right") {
    Player.direction = "right";
    Player.dx = 2;
  } else if (event.key === "ArrowUp" || event.key === "Up") {
    Player.direction = "up";
    Player.dy = -2;
  } else if (event.key === "ArrowDown" || event.key === "Down") {
    Player.direction = "down";
    Player.dy = 2;
  }
};


function handleKeyup(event) {
  if (event.key === "ArrowLeft" || event.key === "Left" || event.key === "ArrowRight" || event.key === "Right") {
    Player.dx = 0;
  }
  if (event.key === "ArrowUp" || event.key === "Up" || event.key === "ArrowDown" || event.key === "Down") {
    Player.dy = 0;
  }
};

function updatePlayer() {
  let nextX = Player.x + Player.dx;
  let nextY = Player.y + Player.dy;

  for (let i = 0; i < randomMaze.length; i++) {
    for (let j = 0; j < randomMaze[i].length; j++) {
      let cell = randomMaze[i][j];
      if (cell === '#') {
        let cellX = j * 30;
        let cellY = i * 30;

        if (
          nextX < cellX + 30 &&
          nextX + Player.width > cellX &&
          nextY < cellY + 30 &&
          nextY + Player.height > cellY
        ) {

          if (Player.dx > 0) {
            Player.dx = 0;
          } else if (Player.dx < 0) {
            Player.dx = 0;
          }

          if (Player.dy > 0) {
            Player.dy = 0;
          } else if (Player.dy < 0) {

            Player.dy = 0;
          }
        }
      }
    }
  }

  Player.x += Player.dx;
  Player.y += Player.dy;
  killPlayer();
};

function drawPlayer() {
  ctx.beginPath();
  ctx.arc(Player.x + 10, Player.y + 10, Player.width / 2, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.stroke();

};


function drawScore() {
  ctx.font = "bold 30px Arial";
  if (wallImage.complete)
    ctx.fillStyle = "black";
  else
    ctx.fillStyle = "white";
  ctx.fillText("Score: " + Player.score, 55, 22);
  //ctx.fillText("Score: " + Player.score, 5, 22);
}

function drawHealthBar() {
  let healthBarWidth = 50;
  let healthPercentage = (Player.health / 100) * healthBarWidth;

  let fillColor;
  if (Player.health <= 30) {
    fillColor = "red";
  } else if (Player.health <= 60) {
    fillColor = "yellow";
  } else {
    fillColor = "green";
  }

  ctx.fillStyle = "gray";
  ctx.fillRect(Player.x - Player.width + 5, Player.y - 12, healthBarWidth, 10);

  ctx.fillStyle = fillColor;
  ctx.fillRect(Player.x - Player.width + 5, Player.y - 12, healthPercentage, 10);

  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  ctx.strokeRect(Player.x - Player.width + 5, Player.y - 12, healthBarWidth, 10);
  ctx.strokeRect(Player.x - Player.width + 5, Player.y - 12, healthPercentage, 10);

}
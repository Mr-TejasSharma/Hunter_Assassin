const mazeWall = [

    "###################",
    "#........#........#",
    "#.##.###.#.###.##.#",
    "#.................#",
    "#.##.#.#####.#.##.#",
    "#....#...#...#....#",
    "####.###.#.###.####",
    "####.#.......#.####",
    "####.#.##.##.#.####",
    "#......#...#......#",
    "####.#.#####.#.####",
    "####.#.......#.####",
    "####.#.#####.#.####",
    "#........#........#",
    "#.##.###.#.###.##.#",
    "#..#...........#..#",
    "##.#.#.#####.#.#.##",
    "#....#...#...#....#",
    "#.######.#.######.#",
    "#.................#",
    "###################"

];


function renderMaze() {

    for (let i = 0; i < mazeWall.length; i++) {
        for (let j = 0; j < mazeWall[i].length; j++) {
            if (mazeWall[i][j] === '#') {
                //ctx.fillRect(j * cell, i * cell, cell, cell);

                if (wallImage.complete && wallImage.naturalWidth !== 0) {
                    ctx.drawImage(wallImage, j * cell, i * cell, cell, cell);
                }
                else {
                    ctx.fillStyle = "black";
                    ctx.fillRect(j * cell, i * cell, cell, cell);
                }
            }
            else if (mazeWall[i][j] === '.') {
                if (cellImage.complete && cellImage.naturalWidth !== 0) {
                    ctx.drawImage(cellImage, j * cell, i * cell, cell, cell);
                }
            }
        }
    }
};
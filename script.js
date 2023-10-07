const mazeContainer = document.getElementById("maze");

const mazePattern = [

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

const renderMaze = (mazePattern, container) => {
    let mazeHTML = "";
    for (let i = 0; i < mazePattern.length; i++) {
        mazeHTML += "<div>";
        for (let j = 0; j < mazePattern[i].length; j++) {
            const cell = mazePattern[i][j];

            const cellDiv = document.createElement("div");
            cellDiv.className = "cell";
            if (cell === '#') {
                cellDiv.classList.add("wall");
            }

            mazeHTML += cellDiv.outerHTML;

        }
        mazeHTML += "</div>";
    }
    container.innerHTML = mazeHTML;
};

renderMaze(mazePattern, mazeContainer);

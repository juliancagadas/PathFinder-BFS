const grid = document.querySelector(".grid");
const cell = document.createElement("div");

for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  grid.appendChild(cell);
}
console.log(grid);
console.log(cell);

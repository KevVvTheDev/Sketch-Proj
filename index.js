const container = document.querySelector(".container");

const columns = 11; // Change this value to adjust the number of columns
const rows = 11; // Change this value to adjust the number of rows
container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

const itemWidth = Math.round(container.clientWidth / columns);
const itemHeight = Math.round(container.clientWidth / rows);
console.log(itemWidth, itemHeight);
for (let i = 0; i < columns * rows; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${itemWidth}px`;
    square.style.height = `${itemHeight}px`;
    container.appendChild(square);
}
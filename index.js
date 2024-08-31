const container = document.querySelector(".container");

const columns = 5; // Change this value to adjust the number of columns
const rows = columns; // Change this value to adjust the number of rows
container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
const itemWidth = Math.round(800 / columns);
const itemHeight = itemWidth;

for (let i = 0; i < columns * rows; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${itemWidth}px`;
    square.style.height = `${itemHeight}px`;
    container.appendChild(square);
}


const darkMode = document.querySelector("#dark");

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

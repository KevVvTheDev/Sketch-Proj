const darkMode = document.querySelector("#dark");
darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

setUpGrid(10); // this will be the default grid size before user change it


const gridSize = document.querySelector("#setSize");
gridSize.addEventListener("click", () => {
    let UserChoice = prompt("Enter the size for this square grid:");
    setUpGrid(UserChoice);
});

function hoverEffect() {

    const hover = document.querySelectorAll(".square");
    for (let i = 0; i < hover.length; i++) {
        hover[i].addEventListener("mouseover", () => {
            hover[i].style.background = getRandomColor();;
        })
    }
}

function setUpGrid(size){
    let existingContainer = document.querySelector(".container");
    if (existingContainer) {
        existingContainer.remove();
    }
   var container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
   
    const columns = size; 
    const rows = columns; 
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
    hoverEffect();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    setUpGrid(10);
});

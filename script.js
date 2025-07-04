// Create grid

const grid = document.getElementById("grid");
let color;

// Get user input for number of rows/cols in the grid

function getUserInput(){
    grid.innerHTML = "";
    const value = this.value;
    document.getElementById("value_dis").textContent = `${value} x ${value}`;
    for(let i=0; i<value*value; i++){

    let tile = document.createElement("div");
    grid.appendChild(tile);
    tile.classList.add("tile");
    tile.style.flexBasis = `calc(100% / ${value})`;
}    
}
document.getElementById("range").addEventListener("input", getUserInput);

// Hover Effect

const hover = document.getElementById("hover");

hover.addEventListener("click", function hoverEffect(){
    color = document.getElementById("colorInput").value;
    // Get all tiles and add hover effect to each one
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.addEventListener("mouseenter", function() {
            tile.style.backgroundColor = color;
        });
    });
})

// Precision Effect

const precision = document.getElementById("manual")

precision.addEventListener("click", function precisionEffect(){
    color = document.getElementById("colorInput").value;
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.addEventListener("click", function() {
            tile.style.backgroundColor = color;
        });
    });
})



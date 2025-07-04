// Create grid

const grid = document.getElementById("grid");
let color;
let flag;
let isDrawing = false;
let isErasing = false;


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
        if (flag==0){
            tile.removeEventListener("click", precisionColor);
        }
        tile.addEventListener("mouseenter", hoverColor);
    });


    flag = 1;
})

// Precision Effect

const precision = document.getElementById("manual")

precision.addEventListener("click", function precisionEffect(){
    color = document.getElementById("colorInput").value;
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        if (flag==1){
            tile.removeEventListener("mouseenter", hoverColor);
        }
        
        tile.addEventListener("mousedown", function() {
            isDrawing = true;
            tile.style.backgroundColor = color; // Color the tile immediately
        });
        
        // Add mouseenter for dragging
        tile.addEventListener("mouseenter", function() {
            if (isDrawing) {
                tile.style.backgroundColor = color;
            }
        });
    });

    document.addEventListener("mouseup", function() {
        isDrawing = false;
    });
    
    flag = 0;
})

// Eraser

const eraser = document.getElementById("eraser")

eraser.addEventListener("click", function eraserEffect(){
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        if (flag==1){
            tile.removeEventListener("mouseenter", hoverColor);
        }

        if (flag==0){
            tile.removeEventListener("click", precisionColor);
        }
        
        tile.addEventListener("mousedown", function() {
            isErasing = true;
            tile.style.backgroundColor = "white"; // Erase the tile immediately
        });
        
        // Add mouseenter for dragging
        tile.addEventListener("mouseenter", function() {
            if (isErasing) {
                tile.style.backgroundColor = "white";
            }
        });
    });

    document.addEventListener("mouseup", function() {
        isErasing = false;
    });

    flag = 2;
})

// Clear 

const clear = document.getElementById("clear")

clear.addEventListener("click", function clearEffect(){
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.style.backgroundColor = "white";
    })
})


// Get color functions

document.getElementById("colorInput").addEventListener("input", function(){
    color = this.value;
})

function hoverColor() {
    this.style.backgroundColor = color;
}

function precisionColor() {
    this.style.backgroundColor = color;
}


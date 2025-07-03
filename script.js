const grid = document.getElementById("grid");

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







document.getElementById("range").addEventListener("input", function(){
    const value_display  = this.value
    document.getElementById("value_dis").textContent = `${value_display} x ${value_display}`;

});


let userInput = 10;

const grid = document.getElementById("grid");

for(let i=0; i<userInput*userInput; i++){

    let tile = document.createElement("div");
    grid.appendChild(tile);
    tile.classList.add("tile");
    tile.style.flexBasis = `calc(100% / ${userInput})`;
}    



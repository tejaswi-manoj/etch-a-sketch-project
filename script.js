    let userInput = 50;
    const grid = document.getElementById("grid");

    for(let i=0; i<userInput*userInput; i++){

        let tile = document.createElement("div");
        grid.appendChild(tile);
        tile.classList.add("tile");

        tile.style.flexBasis = `calc(100% / ${userInput})`;
    }


 
const container = document.getElementById('container');

for(let i=0; i<9; i++){
    const square = document.createElement('div');
    square.className = 'square';
    container.appendChild(square);
}

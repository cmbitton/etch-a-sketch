const boardSizeSlider = document.querySelector('.board-size-slider');

function createDrawingArea(size) {
    const board = document.querySelector('.drawing-board');
    const boardSize = document.querySelector('.board-size');
    boardSize.textContent = `${boardSizeSlider.value} x ${boardSizeSlider.value} pixels`;
    board.textContent = '';
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.height = `${(board.offsetHeight) / size}px`
            pixel.style.width = `${(board.offsetWidth) / size}px`
            row.append(pixel);
        }
        board.append(row);
    }
}
function removeColor(){
    const colors = document.querySelectorAll('.color');
    for(const color of colors){
        if(color.classList.contains('selected')){
        color.classList.remove('selected');}
    }
}
function chooseColor(){
    const colors = document.querySelectorAll('.color');
    for(const color of colors){
        color.addEventListener('click', () =>{
            removeColor();
            color.classList.add('selected');
        })
    }
}

function getColor(){
    const colors = document.querySelectorAll('.color');
    for(const color of colors){
        if (color.classList.contains('selected')){
            return color.id;
        }
    }
}
function draw(){
    const pixels = document.querySelectorAll('.pixel');
    const color = getColor();
    for(const pixel of pixels){
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = color;
        })
    }
}
function cancelDraw(){
    const pixels = document.querySelectorAll('.pixel');
    for(const pixel of pixels){
        pixel.outerHTML = pixel.outerHTML;
    }
}


window.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('pixel')) {
        e.preventDefault();
        const color = getColor();
        e.target.style.backgroundColor = color;
        draw();
    }
});

window.addEventListener('mouseup', (e) => {
    e.preventDefault();
    cancelDraw()
});

document.querySelector('.clear-board').addEventListener('click', () => {
    createDrawingArea(boardSizeSlider.value);
})


boardSizeSlider.addEventListener('input', () => {
    createDrawingArea(boardSizeSlider.value)
})


createDrawingArea(32);
chooseColor();
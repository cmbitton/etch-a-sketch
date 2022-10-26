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

function draw(){
    const pixels = document.querySelectorAll('.pixel');
    for(const pixel of pixels){
        pixel.addEventListener('mouseover', () => {
            pixel.classList.add('hov');
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
        e.target.classList.add('hov');
        draw()
    }
});
window.addEventListener('mouseup', (e) => {
    e.preventDefault();
    cancelDraw()
});
createDrawingArea(64);

boardSizeSlider.addEventListener('input', () => {
    createDrawingArea(boardSizeSlider.value)
})
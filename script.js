function createDrawingArea(size) {
    const board = document.querySelector('.drawing-board');
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            console.log(pixel);
            pixel.classList.add('pixel');
            row.append(pixel);
        }
        board.append(row);
    }
}

function draw(){
    const pixels = document.querySelectorAll('.pixel');
    for(const pixel of pixels){
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'white';
        })
    }
}
function cancelDraw(){
    const pixels = document.querySelectorAll('.pixel');
    for(const pixel of pixels){
        pixel.outerHTML = pixel.outerHTML;
    }
}
createDrawingArea(16);
window.addEventListener('mousedown', (e) => {
    e.preventDefault();
    draw()});
window.addEventListener('mouseup', (e) => {
    e.preventDefault();
    cancelDraw()});

// in ES6, you can use new keywords for variable declarations
// 'const' is a way to make sure that you don't redeclare a variable
// accidentally
const canvas = document.querySelector('#checkerboard');

const context = canvas.getContext('2d');

// In ES6, you can use 'arrow' functions
const getMousePos = (canvas, evt) => {
    const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
}

const randomizeColors = () => {
    const rand = Math.random();
    
    if (rand > 0.75) {
        return 'black';
    } else if (rand > 0.50) {
        return 'red';
    } else if (rand > 0.25) {
        return 'green';
    } else {
        return 'blue'
    }
}

const makeRect = (x,y) => {
    context.beginPath();
    context.fillStyle = randomizeColors();
    context.fillRect(x, y, 25, 25);
}

canvas.addEventListener('click', (event)=>{
    const position = getMousePos(canvas, event);
    // this is another ES6 syntax trick, where you can
    // extract values from an object for more concise code
    const {x, y} = position;
    
    makeRect(x,y);
    
})
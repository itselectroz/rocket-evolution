let tickSpeed = 60; // 60 ticks / second


let canvas;
let ctx;

function resizeCanvas() {
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
}

function update() {
    
}

function draw() {
    const rect = canvas.getBoundingClientRect();

    // Draw background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, rect.width, rect.height);

    
}

function events() {
    window.addEventListener('resize', () => {
        resizeCanvas();
    });
}

function setup() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    resizeCanvas();

    events();

    setInterval(() => {
        update();
        draw();
    }, 1000 / tickSpeed);
}

window.addEventListener('load', setup);
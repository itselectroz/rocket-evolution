let tickSpeed = 60; // 60 ticks / second

const rocket = new Rocket();

let canvas;
let ctx;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext('2d');

    rocket.setPos(new Vector2(10, window.innerHeight / 2));
}

function update() {
    rocket.applyForce(new Vector2(10, 0));

    rocket.update();
}

function draw() {
    const rect = canvas.getBoundingClientRect();

    // Draw background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, rect.width, rect.height);

    rocket.draw(ctx);
}

function events() {
    window.addEventListener('resize', () => {
        resizeCanvas();
    });
}

function setup() {
    canvas = document.getElementById('canvas');

    resizeCanvas();

    events();

    setInterval(() => {
        update();
        draw();
    }, 1000 / tickSpeed);
}

window.addEventListener('load', setup);

const rocket = new Rocket();

let canvas;
let ctx;

let frame = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext('2d');

    rocket.setPos(new Vector2(window.innerWidth / 2, window.innerHeight / 2));
}

function update(frame) {
    rocket.update(frame);
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

    let interval;
    interval = setInterval(() => {
        
        console.log(rocket.position);

        update(frame);
        draw();

        frame++;

        if(frame > lifespan) {
            // TODO: implement generations
            frame = 0;
            clearInterval(interval);
        }
    }, 1000 / tickSpeed);
}

window.addEventListener('load', setup);
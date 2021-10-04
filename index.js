const population = new Population(100);

let canvas;
let ctx;

let frame = 0;

const target = new Target(undefined, 10);

const obstacles = [
    new Obstacle(new Vector2(100, 250), new Vector2(500, 100))
]

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext('2d');

    population.setPos(new Vector2(window.innerWidth / 2, window.innerHeight / 2));
}

function update() {
    population.update(frame, target, obstacles);
}

function draw() {
    const rect = canvas.getBoundingClientRect();

    // Draw background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, rect.width, rect.height);

    target.draw(ctx);

    for(const obstacle of obstacles) {
        obstacle.draw(ctx);
    }

    population.draw(ctx);
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
        
        update();
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
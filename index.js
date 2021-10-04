const population = new Population(300);

let canvas;
let ctx;

let frame = 0;
let generation = 0;

const target = new Target(undefined, 10);

const obstacles = [
    new Obstacle(new Vector2(150, 250), new Vector2(1000, 100))
]

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext('2d');
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

    population.setup();

    let interval;
    interval = setInterval(() => {
        
        update();
        draw();

        frame++;

        if(frame > lifespan || population.dead()) {
            generation++;
            frame = 0;

            const pool = population.evaluate(target);
            population.mate(pool);

            population.setup();

            // clearInterval(interval);
        }
    }, 1000 / tickSpeed);
}

window.addEventListener('load', setup);
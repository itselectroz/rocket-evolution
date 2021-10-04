class Population {
    constructor(size) {
        this.size = size;
        this.rockets = [];
        for(let i = 0; i < size; i++) {
            this.rockets.push(new Rocket());
        }
    }

    setPos(pos) {
        for(const rocket of this.rockets) {
            rocket.setPos(pos);
        }
    }

    update(frame, target, obstacles) {
        for(const rocket of this.rockets) {
            rocket.update(frame, target, obstacles);
        }
    }

    draw(ctx) {
        for(const rocket of this.rockets) {
            rocket.draw(ctx);
        }
    }
}
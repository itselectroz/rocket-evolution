class Rocket {
    constructor(dna) {
        this.dna = !!dna ? dna : new DNA();

        this.acceleration = new Vector2(0, 0);
        this.velocity = new Vector2(0, 0);
        this.position = new Vector2(0, 0);

        this.crashed = false;
    }

    setPos(pos) {
        if(!(pos instanceof Vector2)) {
            return;
        }
        this.position = pos;
    }

    applyForce(force) {
        if(!(force instanceof Vector2)) {
            return;
        }
        this.acceleration = this.acceleration.add(force);
    }

    update(frame, obstacles) {
        if(this.crashed)
            return;

        this.applyForce(this.dna.genes[frame])

        this.velocity = this.velocity.add(this.acceleration);
        this.position = this.position.add(this.velocity);
        this.acceleration = new Vector2(0, 0);
        this.velocity = this.velocity.limit(maxVelocity);

        if(this.position.x < 0 || this.position.x > window.innerWidth) {
            this.crashed = true;
        }
        if(this.position.y < 0 || this.position.y > window.innerHeight) {
            this.crashed = true;
        }

        if(!!obstacles && Array.isArray(obstacles)) {
            for(const obstacle of obstacles) {
                if(obstacle.collides(this.position)) {
                    this.crashed = true;
                    break;
                }
            }
        }
    }

    draw(ctx) {
        if(this.crashed)
            return; // could make it draw red instead?

        const nextPos = this.position.add(this.velocity.mul(2));
        
        ctx.beginPath();
        ctx.lineWidth = 2.5;
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'white';
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(nextPos.x, nextPos.y);
        ctx.stroke();
    }
}
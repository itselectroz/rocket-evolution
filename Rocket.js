const maxVelocity = 4;

class Rocket {
    constructor() {
        this.acceleration = new Vector2(0, 0);
        this.velocity = new Vector2(0, 0);
        this.position = new Vector2(0, 0);
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

    update() {
        this.velocity = this.velocity.add(this.acceleration);
        this.position = this.position.add(this.velocity);
        this.acceleration = new Vector2(0, 0);
        this.velocity = this.velocity.limit(maxVelocity);
    }

    draw(ctx) {
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
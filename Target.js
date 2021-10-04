class Target {
    constructor(pos, radius) {
        this.pos = !!pos ? pos : new Vector2(100, 100);
        this.radius = radius == undefined ? 50 : radius;
    }

    collides(pos) {
        if(!pos || !(pos instanceof Vector2)) {
            return false;
        }

        return pos.sub(this.pos).magnitude() < this.radius;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
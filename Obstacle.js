class Obstacle {
    constructor(pos, size) {
        this.pos = !!pos ? pos : new Vector2(0, 0);
        this.size = !!size ? size : new Vector2(100, 100);
    }

    collides(pos) {
        if(!pos || !(pos instanceof Vector2)) {
            return;
        }
        return pos.x > this.pos.x && pos.x < this.pos.x + this.size.x && pos.y > this.pos.y && pos.y < this.pos.y + this.size.y;
    }

    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
}
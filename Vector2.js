class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(b) {
        return new Vector2(this.x + b.x, this.y + b.y);
    }

    sub(b) {
        return new Vector2(this.x - b.x, this.y - b.y);
    }

    mul(s) {
        return new Vector2(this.x * s, this.y * s);
    }

    div(s) {
        return new Vector2(this.x / s, this.y / s);
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        const len = this.magnitude();
        return this.div(len);
    }

    limit(x) {
        const mag = this.magnitude();
        if(mag > x) {
            return this.mul(x / mag);
        }
        else {
            return this;
        }
    }
}
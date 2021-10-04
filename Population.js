class Population {
    constructor(size) {
        this.size = size;
        this.members = [];
        for(let i = 0; i < size; i++) {
            this.members.push(new Rocket());
        }
    }

    evaluate(target) {
        let maxFitness = 0;
        for(let i = 0; i < this.size; i++) {
            const rocket = this.members[i];
            rocket.evaluate(target);

            if(rocket.fitness > maxFitness) {
                maxFitness = rocket.fitness;
            }
        }
        
        const pool = [];
        for(let i = 0; i < this.size; i++) {
            const rocket = this.members[i];
            rocket.fitness /= maxFitness;
            
            const count = rocket.fitness * 100;
            for(let j = 0; j < count; j++) {
                pool.push(rocket);
            }
        }
        return pool;
    }

    mate(pool) {
        const newPopulation = [];
        const poolLength = pool.length;
        for(let i = 0; i < this.size; i++) {
            const rocketA = pool[Math.floor(Math.random() * poolLength)];
            const rocketB = pool[Math.floor(Math.random() * poolLength)];

            const childDna = rocketA.dna.crossover(rocketB.dna);

            childDna.mutate();

            newPopulation.push(new Rocket(childDna));
        }

        this.members = newPopulation;
    }

    setPos(pos) {
        for(const rocket of this.members) {
            rocket.setPos(pos);
        }
    }

    update(frame, target, obstacles) {
        for(const rocket of this.members) {
            rocket.update(frame, target, obstacles);
        }
    }

    draw(ctx) {
        for(const rocket of this.members) {
            rocket.draw(ctx);
        }
    }

    setup() { 
        this.setPos(new Vector2(window.innerWidth / 2, window.innerHeight - 50));
    }

    dead() {
        return this.members.every(v => v.crashed);
    }
}
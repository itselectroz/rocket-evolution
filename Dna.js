class DNA {
    constructor(genes) {
        if(!!genes && Array.isArray(genes) && genes.length >= lifespan) {
            this.genes = genes;
        }
        else {
            if(!!genes) {
                console.log(`[WARNING] DNA gene pool didn't meet requirements, generating new one\n - IsArray: ${Array.isArray(genes)}\n - Length: ${genes.length} / ${lifespan}`);
            }
            // Random genes
            this.genes = [];
            for(let i = 0; i < lifespan; i++) {
                this.genes.push(Vector2.random(-maxForce, maxForce));
            }
        }
    }

    crossover(other) {
        const genes = [];
        const randomPoint = Math.floor(Math.random() * lifespan);
        for(let i = 0; i < lifespan; i++) {
            genes.push(i > randomPoint ? this.genes[i] : other.genes[i]);
        }
        return new DNA(genes);
    }

    mutate() {
        for(let i = 0; i < lifespan; i++) {
            if(Math.random() < mutationRate) {
                this.genes[i] = Vector2.random(-maxForce, maxForce);
            }
        }
    }
}
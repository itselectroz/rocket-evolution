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
                this.genes.push(Vector2.random(-maxVelocity, maxVelocity));
            }
        }
    }
}
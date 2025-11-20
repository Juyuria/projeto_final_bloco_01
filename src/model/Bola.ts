export abstract class Bola {

    protected id: number;
    protected tipo: string;
    protected preco: number;
    protected material: string;

    constructor(id: number, tipo: string, preco: number, material: string) {
        this.id = id;
        this.tipo = tipo;
        this.preco = preco;
        this.material = material;
    }

    public abstract exibir(): void;
}

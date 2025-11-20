import { Bola } from "./Bola";

export class VendaBola extends Bola {

    private tamanho: number; // em cm

    constructor(id: number, tipo: string, preco: number, material: string, tamanho: number) {
        super(id, tipo, preco, material);
        this.tamanho = tamanho;
    }

    public exibir(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Material: ${this.material}`);
        console.log(`Tamanho: ${this.tamanho} cm`);
    }
}

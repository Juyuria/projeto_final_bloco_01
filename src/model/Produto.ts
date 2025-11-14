
export class Produto {
    static contador: number = 0;
    id: number;
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.id = Produto.contador++;
        this.nome = nome;
        this.preco = preco;
    }

    exibirInfo(): void {
        console.log(`Produto ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

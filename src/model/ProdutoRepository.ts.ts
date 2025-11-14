import { Produto } from './Produto';

export class ProdutoRepository {
    private produtos: Produto[] = [];
    private maxProdutos: number = 4;

    create(item: Produto): void {
        if (this.produtos.length < this.maxProdutos) {
            this.produtos.push(item);
        } else {
            console.log("Número máximo de produtos atingido!");
        }
    }

    findAll(): Produto[] {
        return this.produtos;
    }

    find(id: number): Produto | undefined {
        return this.produtos.find(p => p.id === id);
    }
}

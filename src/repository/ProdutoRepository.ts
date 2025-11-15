import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    create(produto: Produto): void;
    listarTodos(): Produto[];
    buscarPorId(id: number): Produto | undefined;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
}

export class ProdutoRepositoryImpl implements ProdutoRepository {
    private produtos: Produto[] = [];

    create(produto: Produto): void {
        this.produtos.push(produto);
    }

    listarTodos(): Produto[] {
        return this.produtos;
    }

    buscarPorId(id: number): Produto | undefined {
        return this.produtos.find(produto => produto.id === id);
    }

    atualizar(produto: Produto): void {
        const index = this.produtos.findIndex(p => p.id === produto.id);
        if (index !== -1) {
            this.produtos[index] = produto;
        }
    }

    deletar(id: number): void {
        this.produtos = this.produtos.filter(produto => produto.id !== id);
    }
}

import { Produto } from '../model/Produto';
import { ProdutoRepository } from '../repository/ProdutoRepository';

export class ProdutoController {
    private produtoRepo: ProdutoRepository;

    constructor(produtoRepo: ProdutoRepository) {
        this.produtoRepo = produtoRepo;
    }

    criarProduto(nome: string, preco: number): Produto {
        try {
            if (!nome || preco <= 0) {
                throw new Error("Nome inválido ou preço inválido.");
            }

            const produto = new Produto(nome, preco);
            this.produtoRepo.create(produto);
            console.log("Produto criado com sucesso.");
            return produto;
        } catch (error: any) {
            console.error("Erro ao criar produto:", error.message);
            throw error;
        }
    }

    listarProdutos(): Produto[] {
        try {
            const produtos = this.produtoRepo.listarTodos();
            if (produtos.length === 0) {
                console.log("Nenhum produto encontrado.");
                return [];
            }
            return produtos;
        } catch (error: any) {
            console.error("Erro ao listar produtos:", error.message);
            throw error;
        }
    }

    buscarProdutoPorID(id: number): Produto | undefined {
        try {
            if (id <= 0) {
                throw new Error("ID inválido.");
            }

            const produto = this.produtoRepo.buscarPorId(id);
            if (!produto) {
                console.log("Produto não encontrado.");
                return undefined;
            }
            return produto;
        } catch (error: any) {
            console.error("Erro ao buscar produto:", error.message);
            throw error;
        }
    }

    atualizarProduto(id: number, nome: string, preco: number): Produto | undefined {
        try {
            if (id <= 0 || !nome || preco <= 0) {
                throw new Error("ID, nome ou preço inválidos.");
            }

            const produto = this.produtoRepo.buscarPorId(id);
            if (!produto) {
                console.log("Produto não encontrado.");
                return undefined;
            }

            produto.nome = nome;
            produto.preco = preco;
            this.produtoRepo.atualizar(produto);
            console.log("Produto atualizado com sucesso.");
            return produto;
        } catch (error: any) {
            console.error("Erro ao atualizar produto:", error.message);
            throw error;
        }
    }

    excluirProduto(id: number): boolean {
        try {
            if (id <= 0) {
                throw new Error("ID inválido.");
            }

            const produto = this.produtoRepo.buscarPorId(id);
            if (!produto) {
                console.log("Produto não encontrado.");
                return false;
            }

            this.produtoRepo.deletar(id);
            console.log("Produto excluído com sucesso.");
            return true;
        } catch (error: any) {
            console.error("Erro ao excluir produto:", error.message);
            throw error;
        }
    }
}

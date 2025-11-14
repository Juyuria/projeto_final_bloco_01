import * as readlineSync from 'readline-sync';
import { Produto } from './src/model/Produto';
import { ProdutoRepository } from './src/model/ProdutoRepository.ts';

const produtoRepo = new ProdutoRepository();  

export function main() {
    let opcao: number;

    criarProduto(produtoRepo);  

    while (true) {
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("              E-COMMERCE DE BOLAS DE FUTEBOL         ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        opcao = readlineSync.questionInt("Escolha uma opção: ");

        if (opcao === 4) {
            console.log("\nObrigado por usar o nosso e-commerce de bolas de futebol!");
            break;
        }

        switch (opcao) {
            case 1:
                console.log("\nCriando Produtos novamente...");
                criarProduto(produtoRepo);  // Criar os produtos
                break;
            case 2:
                listarProdutos(produtoRepo);  // Listar produtos
                break;
            case 3:
                buscarProdutoPorID(produtoRepo);  // Buscar produto por ID
                break;
            default:
                console.log("\nOpção Inválida!");
                break;
        }
    }
}

function criarProduto(produtoRepo: ProdutoRepository) {
    console.log("\nCriando Produtos");

    const produto1 = new Produto("Bola", 100);           // Bola
    const produto2 = new Produto("Bola Verde", 50);      // Bola Verde
    const produto3 = new Produto("Bola Azul", 150);      // Bola Azul
    const produto4 = new Produto("Bola Preta", 50);      // Bola Preta

    produtoRepo.create(produto1);
    produtoRepo.create(produto2);
    produtoRepo.create(produto3);
    produtoRepo.create(produto4);

    console.log("Produtos criados com sucesso!");
}

function listarProdutos(produtoRepo: ProdutoRepository) {
    console.log("\nListando Produtos...");
    const produtos = produtoRepo.findAll();
    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
    } else {
        produtos.forEach(p => p.exibirInfo()); 
    }
}

function buscarProdutoPorID(produtoRepo: ProdutoRepository) {
    const id = readlineSync.questionInt("Digite o ID do produto: ");
    const produto = produtoRepo.find(id);  
    
    if (produto) {
        produto.exibirInfo();  
        console.log("Produto não encontrado.");
    }
}

main();

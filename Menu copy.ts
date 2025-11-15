import * as readlineSync from 'readline-sync';
import { ProdutoController } from './src/controller/ProdutoController';  // Corrigido o caminho

const produtoController = new ProdutoController();  // Instanciando o ProdutoController

export function main() {
    let opcao: number;

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

        switch (opcao) {
            case 1:
                criarProduto();  
                break;

            case 2:
                listarProdutos();  
                break;

            case 3:
                buscarProdutoPorID();  
                break;

            case 4:
                console.log("\nObrigado por usar o nosso e-commerce de bolas de futebol!");
                return;  // Encerra o menu e sai do programa

            default:
                console.log("\nOpção inválida! Tente novamente.\n");
                break;
        }
    }
}

// Função para criar um produto
function criarProduto() {
    console.log("\nCriar Produto");

    const nome = readlineSync.question("Digite o nome do produto: ");
    const preco = readlineSync.questionFloat("Digite o preço do produto: ");

    try {
        const produto = produtoController.criarProduto(nome, preco);
        console.log("Produto criado:", produto);
    } catch (error: any) {  // Adicionando o tipo "any" para garantir que o "error" seja tratado corretamente
        console.error("Erro ao criar produto:", error.message);
    }
}

// Função para listar todos os produtos
function listarProdutos() {
    console.log("\nListar todos os Produtos");
    
    try {
        const produtos = produtoController.listarProdutos();
        if (produtos.length === 0) {
            console.log("Nenhum produto cadastrado.");
        } else {
            produtos.forEach(produto => {
                console.log(`ID: ${produto.id} - Nome: ${produto.nome} - Preço: R$ ${produto.preco.toFixed(2)}`);
            });
        }
    } catch (error: any) {  // Tipo de erro também tratado como "any"
        console.error("Erro ao listar produtos:", error.message);
    }
}

// Função para buscar um produto pelo ID
function buscarProdutoPorID() {
    console.log("\nBuscar Produto por ID");

    const id = readlineSync.questionInt("Digite o ID do produto: ");
    
    try {
        const produto = produtoController.buscarProdutoPorID(id);
        if (produto) {
            console.log(`Produto encontrado: ID: ${produto.id} - Nome: ${produto.nome} - Preço: R$ ${produto.preco.toFixed(2)}`);
        } else {
            console.log("Produto não encontrado.");
        }
    } catch (error: any) {  // Tipo de erro tratado aqui também
        console.error("Erro ao buscar produto:", error.message);
    }
}

// Chama a função principal para rodar o menu
main();

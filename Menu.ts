import * as readlineSync from 'readline-sync';
import { ProdutoController } from './src/controller/ProdutoController';
import { ProdutoRepositoryImpl } from './src/repository/ProdutoRepository'; 


const produtoRepo = new ProdutoRepositoryImpl(); 


const produtoController = new ProdutoController(produtoRepo);

export function main() {
    let opcao: number;

    while (true) {
        console.log("*****************************************************");
        console.log("              E-COMMERCE DE BOLAS DE FUTEBOL         ");
        console.log("*****************************************************");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Sair                                 ");
        console.log("*****************************************************");

        opcao = readlineSync.questionInt("Escolha uma opção: ");
        
        switch (opcao) {
            case 1:
                console.log("\nCriar Produto");
                
                break;

            case 2:
                console.log("\nListar todos os Produtos");
                
                break;

            case 3:
                console.log("\nBuscar Produto por ID");
              
                break;

            case 4:
                console.log("\nObrigado por usar o nosso e-commerce de bolas de futebol!");
                break;
        }
    }
}

main();

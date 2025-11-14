import * as readlineSync from "readline-sync";

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
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Comprar Produto                      ");
        console.log("            7 - Pagar Produto                        ");
        console.log("            8 - Finalizar Compra                     ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlineSync.questionInt("Escolha uma opção");

        if (opcao == 9) {
            console.log("\nObrigado por usar o nosso e-commerce de bolas de futebol!");
            sobre();
            break;
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Produto\n\n");
                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");
                break;
            case 3:
                console.log("\n\nBuscar Produto por ID\n\n");
                break;
            case 4:
                console.log("\n\nAtualizar Dados do Produto\n\n");
                break;
            case 5:
                console.log("\n\nApagar Produto\n\n");
                break;
            case 6:
                console.log("\n\nComprar Produto\n\n");
                break;
            case 7:
                console.log("\n\nPagar Produto\n\n");
                break;
            case 8:
                console.log("\n\nFinalizar Compra\n\n");
                break;
            default:
                console.log("\nOpção Inválida!\n");
                break;
        }
    }
}

/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Juliana");
    console.log("Generation Brasil - generation@generation.org");
    console.log("https://github.com/Juyuria/projeto_final_bloco_01");
    console.log("*****************************************************");
}

main()

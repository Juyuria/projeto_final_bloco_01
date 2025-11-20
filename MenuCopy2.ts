import readlineSync = require("readline-sync");

import { ProdutoController } from "./src/controller/ProdutoController";
import { VendaBola } from "./src/model/VendaBola";



const controller = new ProdutoController();

function main() {

  let opcao: number;

  while (true) {

    console.log("***************************************************");
    console.log("              E-COMMERCE DE BOLAS                 ");
    console.log("***************************************************");
    console.log("                                                   ");
    console.log("              1 - Listar Bolas                     ");
    console.log("              2 - Buscar Bola por Tipo             ");
    console.log("              3 - Atualizar Bola                   ");
    console.log("              4 - Deletar Bola                     ");
    console.log("              5 - Comprar Bola                     ");
    console.log("              6 - Sair                             ");
    console.log("***************************************************");
    console.log("                                                   ");

    console.log("Escolha uma opção: ");
    opcao = readlineSync.questionInt("");

    if (opcao == 6) {
      console.log("Saindo...");
      sobre();
      return;
    }

    switch (opcao) {
      case 1:
        console.log("\n\nListar Bolas\n\n");

        const lista = controller.listar();

        if (lista.length === 0) {
          console.log("Nenhuma bola disponível.\n");
        } else {
          lista.forEach((b: any) => {
            console.log("----------------------------");
            b.exibir();
          });
          console.log("----------------------------\n");
        }

        break;

      case 2:
        console.log("\n=== Buscar Bola por Tipo ===\n");

        const termo = readlineSync.question("Digite o tipo ou parte do tipo: ");

        const encontrada = controller.buscarPorTipo(termo);

        if (!encontrada) {
          console.log("\nNenhuma bola encontrada com esse tipo.\n");
        } else {
          console.log("\nBola encontrada:\n");
          encontrada.exibir();
          console.log("\n");
        }

        break;

      case 3:
        console.log("\n\nAtualizar Bola\n\n");

        const idAtualizar = parseInt(readlineSync.question("Digite o ID da bola a atualizar: "));

        const bolaAtual = controller.buscarPorId(idAtualizar);

        if (!bolaAtual) {
          console.log("\nBola não encontrada.\n");
          break;
        }

        console.log("\nDeixe em branco para manter o valor atual.\n");

        const novoTipo = readlineSync.question(`Tipo [${(bolaAtual as any).tipo}]: `) || (bolaAtual as any).tipo;

        const precoInput = readlineSync.question(`Preço [${(bolaAtual as any).preco}]: `);
        const novoPreco = precoInput ? parseFloat(precoInput) : (bolaAtual as any).preco;

        const novoMaterial = readlineSync.question(`Material [${(bolaAtual as any).material}]: `) || (bolaAtual as any).material;

        const tamanhoInput = readlineSync.question(`Tamanho (cm) [${(bolaAtual as any).tamanho ?? 0}]: `);
        const novoTamanho = tamanhoInput ? parseFloat(tamanhoInput) : (bolaAtual as any).tamanho;

        const bolaAtualizada = new VendaBola(
          (bolaAtual as any).id,
          novoTipo,
          novoPreco,
          novoMaterial,
          novoTamanho
        );

        try {
          controller.atualizar(bolaAtualizada);
          console.log("\nBola atualizada com sucesso!\n");
        } catch (error: any) {
          console.log(`Erro ao atualizar: ${error.message}`);
        }

        break;

      case 4:
        console.log("\n\nDeletar Bola\n\n");

        const idDeletar = parseInt(readlineSync.question("Digite o ID da bola a deletar: "));

        try {
          controller.deletar(idDeletar);
          console.log("\nBola deletada com sucesso!\n");
        } catch (error: any) {
          console.log(`Erro ao deletar: ${error.message}\n`);
        }

        break;

      case 5:
        console.log("\n\nComprar Bola\n\n");

        const idComprar = parseInt(readlineSync.question("Digite o ID da bola que deseja comprar: "));

        try {
          controller.comprar(idComprar);
        } catch (error: any) {
          console.log(`Erro na compra: ${error.message}\n`);
        }

        break;

      default:
        console.log("Opção inválida! Tente novamente.");
        break;
    }
  }
}

function sobre(): void {
  console.log("***************************************************");
  console.log("        Obrigado por usar nosso e-commerce!        ");
  console.log("Desenvolvido por: Juliana");
  console.log("***************************************************");
}

main();

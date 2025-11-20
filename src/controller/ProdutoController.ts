import { Bola } from "../model/Bola";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { VendaBola } from "../model/VendaBola";


export class ProdutoController implements ProdutoRepository {
  
  private listaBolas: Bola[] = [];
  private idCounter: number = 1;

  constructor() {
    // estoque inicial, já com IDs incrementais
    this.listaBolas.push(new VendaBola(this.idCounter++, "Futebol", 120, "Couro Sintético", 22));
    this.listaBolas.push(new VendaBola(this.idCounter++, "Basquete", 150, "Borracha", 24));
  }

  listar(): Bola[] {
    return [...this.listaBolas];
  }

  buscarPorId(id: number): Bola | null {
    const found = this.listaBolas.find((b: any) => (b as any).id === id);
    return found ?? null;
  }

  atualizar(bola: Bola): void {
    const idx = this.listaBolas.findIndex((b: any) => (b as any).id === (bola as any).id);
    if (idx === -1) {
      throw new Error("Bola não encontrada para atualizar.");
    }
    this.listaBolas[idx] = bola;
  }

  deletar(id: number): void {
    const idx = this.listaBolas.findIndex((b: any) => (b as any).id === id);
    if (idx === -1) {
      throw new Error("Bola não encontrada para deletar.");
    }
    this.listaBolas.splice(idx, 1);
  }

  // Busca análoga ao buscarPorTitulo da colega, mas por tipo
  buscarPorTipo(tipo: string): Bola | null {
    const t = tipo.trim().toLowerCase();
    const found = this.listaBolas.find((b: any) => (b as any).tipo.toLowerCase().includes(t));
    return found ?? null;
  }

  // Compra segue o padrão simples: confirma e remove do estoque
  comprar(id: number): void {
    const idx = this.listaBolas.findIndex((b: any) => (b as any).id === id);
    if (idx === -1) {
      throw new Error("Bola não encontrada para comprar.");
    }
    const item = this.listaBolas[idx] as any;
    console.log(`Compra realizada: ${item.tipo} por R$ ${item.preco}`);
    this.listaBolas.splice(idx, 1);
  }
}

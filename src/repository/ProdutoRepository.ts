import { Bola } from "../model/Bola";

export interface ProdutoRepository {
    listar(): Bola[];
    buscarPorId(id: number): Bola | null;
    atualizar(bola: Bola): void;
    deletar(id: number): void;
}

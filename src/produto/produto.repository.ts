import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  private produtos = [];
  async salva(produto) {
    this.produtos.push(produto);
  }
  async listar() {
    return this.produtos;
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioRepository {
  private usuarios = [];
  async salvar(usuario) {
    this.usuarios.push(usuario);
  }
  async listar() {
    return this.usuarios;
  }
  async existeComEmail(email: string) {
    const possivelUsiario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );
    return possivelUsiario !== undefined;
  }
}

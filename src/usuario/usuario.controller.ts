import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criarUsuario(@Body() dados: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.email = dados.email;
    usuarioEntity.senha = dados.senha;
    usuarioEntity.nome = dados.nome;
    usuarioEntity.id = uuid();

    this.usuarioRepository.salvar(usuarioEntity);
    return { id: usuarioEntity.id, message: 'usuario criado com sucesso' };
  }
  @Get()
  async listUsuarios() {
    return this.usuarioRepository.listar();
  }
}

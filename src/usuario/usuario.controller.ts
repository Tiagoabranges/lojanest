import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criarUsuario(@Body() dados: CriaUsuarioDTO) {
    this.usuarioRepository.salvar(dados);
    return dados;
  }
  @Get()
  async listUsuarios() {
    return this.usuarioRepository.listar();
  }
}

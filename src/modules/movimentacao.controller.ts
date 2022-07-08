import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MovimentacaoDTO } from './carteira.dto';
import { MovimentacaoService } from './movimentacao.service';

@Controller('api/movimentacao')
export class MovimentacaoController {
  constructor(private readonly movimentacaoService: MovimentacaoService) {}

  @Post()
  async create(@Body() data: MovimentacaoDTO) {
    return this.movimentacaoService.create(data)
  }

  @Get()
  async findAll(){
    return this.movimentacaoService.findAll()
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: MovimentacaoDTO) {
    return this.movimentacaoService.update(id, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.movimentacaoService.delete(id)
  }

  
}

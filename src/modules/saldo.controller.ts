import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SaldoDTO } from './carteira.dto';
import { SaldoService } from './saldo.service';

@Controller('api/saldo')
export class SaldoController {
  constructor(private readonly saldoService: SaldoService) {}

  @Get()
  async findAll(){
    return this.saldoService.findAll()
  }

  @Post()
  async create(@Body() data: SaldoDTO) {
    return this.saldoService.create(data)
  }

  // @Get()
  // async findFirst(){
  //   return this.saldoService.findFirst()
  // }

  
}

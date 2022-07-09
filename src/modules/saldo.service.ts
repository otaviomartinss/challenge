import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { SaldoDTO } from './carteira.dto';

@Injectable()
export class SaldoService {
  constructor(private prisma: PrismaService){}

  async create(data: SaldoDTO) {
    const saldo = await this.prisma.saldo.create({
      data,
    })
    return saldo
  }

  // async findFirst() {
  //   const movimentacao = this.prisma.saldo.findFirst({
  //     orderBy: {
  //       dataAtualizacao: 'desc'
  //     }
  //   })
  //   return movimentacao
  // }

  async findAll() {
    const getSaldo = await this.prisma.$queryRaw`SELECT SUM(valor) FROM movimentacoes;`
    return getSaldo
  }

}

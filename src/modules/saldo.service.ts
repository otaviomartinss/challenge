import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class SaldoService {
  constructor(private prisma: PrismaService){}

  async findAll() {
    const getSaldo = await this.prisma.$queryRaw`SELECT SUM(valor) FROM movimentacoes;`
    return getSaldo
  }

}

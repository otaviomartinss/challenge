import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { PrismaClient } from '@prisma/client';

  const prisma = new PrismaClient
  @Injectable()
export class SaldoService {
  constructor(private prisma: PrismaService){}

  async findSaldo() {
    const saldo = await this.prisma.movimentacao.aggregate({
        _sum: {
          valor: true
        }
  })
    return saldo
  }
}

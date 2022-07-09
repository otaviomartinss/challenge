import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class InicialService {
  constructor(private prisma: PrismaService){}

  async findMany(dataInicial: Date, dataFinal: Date) {
    const movimentacao = this.prisma.movimentacao.findMany({
      where: {
        AND: [
          {
          dataCadastro: {
            gte: new Date(
              dataInicial
            )
          }
        },

          {
          dataCadastro: {
            lte: new Date(
              dataFinal
            )
          }
        }
            ]        
      },
      
      orderBy: [{
        dataCadastro: 'asc'
      }]
    })
    return movimentacao
  }
}

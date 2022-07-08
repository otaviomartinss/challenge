import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { MovimentacaoController } from './movimentacao.controller';
import { MovimentacaoService } from './movimentacao.service';

@Module({
  controllers: [MovimentacaoController],
  providers: [MovimentacaoService, PrismaService],
})
export class CarteiraModule {}

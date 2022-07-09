import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { InicialService } from './inicial.service';
import { InicialController } from './inicial.controller';
import { MovimentacaoController } from './movimentacao.controller';
import { MovimentacaoService } from './movimentacao.service';
import { FinalController } from './final.controller';
import { FinalService } from './final.service';

@Module({
  controllers: [MovimentacaoController, InicialController, FinalController],
  providers: [MovimentacaoService, InicialService, FinalService, PrismaService],
})
export class CarteiraModule {}

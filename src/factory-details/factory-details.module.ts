import { Module } from '@nestjs/common';
import { FactoryDetailsService } from './factory-details.service';
import { FactoryDetailsController } from './factory-details.controller';
import { FactoryDetail } from './entities/factory-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([FactoryDetail])],
  controllers: [FactoryDetailsController],
  providers: [FactoryDetailsService],
})
export class FactoryDetailsModule {}

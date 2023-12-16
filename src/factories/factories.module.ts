import { Module } from '@nestjs/common';
import { FactoriesService } from './factories.service';
import { FactoriesController } from './factories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factory } from './entities/factory.entity';



@Module({
  imports:[TypeOrmModule.forFeature([Factory])],
  controllers: [FactoriesController],
  providers: [FactoriesService],
})
export class FactoriesModule {}

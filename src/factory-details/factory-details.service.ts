import { Injectable } from '@nestjs/common';
import { CreateFactoryDetailDto } from './dto/create-factory-detail.dto';
import { UpdateFactoryDetailDto } from './dto/update-factory-detail.dto';
import { FactoryDetail } from './entities/factory-detail.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FactoryDetailsService {
  constructor(
    @InjectRepository(FactoryDetail)
    private readonly factoryDetailRepository: Repository<FactoryDetail>,
  ) {}

  create(
    createFactoryDetailDto: CreateFactoryDetailDto,
  ): Promise<FactoryDetail> {
    const factoryDetail: FactoryDetail = Object.assign(
      new FactoryDetail(),
      createFactoryDetailDto,
    );

    return this.factoryDetailRepository.save(factoryDetail);
  }

  findAll(): Promise<FactoryDetail[]> {
    return this.factoryDetailRepository.find();
  }

  findOne(id: number) {
    return this.factoryDetailRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateFactoryDetailDto: UpdateFactoryDetailDto) {
    const factoryDetail: FactoryDetail = new FactoryDetail();

    factoryDetail.usingUnit = updateFactoryDetailDto.usingUnit;
    factoryDetail.dateRange = updateFactoryDetailDto.dateRange;
    factoryDetail.usageKW = updateFactoryDetailDto.usageKW;
    factoryDetail.usageFee = updateFactoryDetailDto.usageFee;
    factoryDetail.cutPrice = updateFactoryDetailDto.cutPrice;
    factoryDetail.id = id;

    return this.factoryDetailRepository.save(factoryDetail);
  }

  remove(id: number) {
    return this.factoryDetailRepository.delete(id);
  }

  async addColumn(columnName: string, columnType: string) {
    const query = `ALTER TABLE factory_detail ADD COLUMN ${columnName} ${columnType}`;
    await this.factoryDetailRepository.query(query);
  }

  async removeColumn(columnName: string) {
    const query = `ALTER TABLE factory_detail DROP COLUMN ${columnName};`;
    await this.factoryDetailRepository.query(query);
  }
}

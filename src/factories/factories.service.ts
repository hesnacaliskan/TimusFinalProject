import { Injectable } from '@nestjs/common';
import { CreateFactoryDto } from './dto/create-factory.dto';
import { UpdateFactoryDto } from './dto/update-factory.dto';
import { Repository } from 'typeorm';
import { Factory } from './entities/factory.entity';
import { InjectRepository } from '@nestjs/typeorm';



@Injectable()
export class FactoriesService {

  constructor(@InjectRepository(Factory) private readonly factoryRepository: Repository<Factory>){

  }

  create(createFactoryDto: CreateFactoryDto) : Promise<Factory> {
    const factory: Factory = Object.assign(new Factory(), createFactoryDto);
    return this.factoryRepository.save(factory);
  }

  findAll(): Promise<Factory[]> {
    return this.factoryRepository.find();
  }

  findById(id: number) {
    return this.factoryRepository.findOne({where : { id : id} });
  }

  update(id: number, updateFactoryDto: UpdateFactoryDto) {
    let factory : Factory = new Factory();
    factory.factoryName = updateFactoryDto.factoryName;
    factory.membershipDate = updateFactoryDto.membershipDate;
    factory.membershipExpiryDate = updateFactoryDto.membershipExpiryDate;
    factory.employeeCount = updateFactoryDto.employeeCount;
    factory.freeMember = updateFactoryDto.freeMember;
    factory.id = id;


    return this.factoryRepository.save(factory);
  }

  remove(id: number) {
    return this.factoryRepository.delete(id);
  }

  async addColumn(columnName: string, columnType: string) {

    const query = `ALTER TABLE factory ADD COLUMN ${columnName} ${columnType}`;
    await this.factoryRepository.query(query);     

  }

  async removeColumn(columnName: string) {
    
    const query = `ALTER TABLE factory DROP COLUMN ${columnName};`;
    await this.factoryRepository.query(query);
    
  }
}

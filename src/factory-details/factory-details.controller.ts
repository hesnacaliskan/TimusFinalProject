import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactoryDetailsService } from './factory-details.service';
import { CreateFactoryDetailDto } from './dto/create-factory-detail.dto';
import { UpdateFactoryDetailDto } from './dto/update-factory-detail.dto';

@Controller('factory-details')
export class FactoryDetailsController {
  constructor(private readonly factoryDetailsService: FactoryDetailsService) {}

  @Post()
  create(@Body() createFactoryDetailDto: CreateFactoryDetailDto) {
    return this.factoryDetailsService.create(createFactoryDetailDto);
  }

  @Get()
  findAll() {
    return this.factoryDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factoryDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactoryDetailDto: UpdateFactoryDetailDto) {
    return this.factoryDetailsService.update(+id, updateFactoryDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factoryDetailsService.remove(+id);
  }

  @Post('/add')
  async addColumn(@Body() columnData: { columnName: string; columnType: string }) {
    const { columnName, columnType } = columnData;
    return this.factoryDetailsService.addColumn(columnName, columnType);
  }

  @Delete('removeColumn/:columnName')
  async removeColumn(@Param('columnName') columnName: string) {
    await this.factoryDetailsService.removeColumn(columnName);
    return { message: `Column '${columnName}' has been removed.` };
  }
}

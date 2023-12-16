import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactoriesService } from './factories.service';
import { CreateFactoryDto } from './dto/create-factory.dto';
import { UpdateFactoryDto } from './dto/update-factory.dto';

@Controller('factories')
export class FactoriesController {
  constructor(private readonly factoriesService: FactoriesService) {}

  @Post()
  create(@Body() createFactoryDto: CreateFactoryDto) {
    return this.factoriesService.create(createFactoryDto);
  }

  @Get()
  findAll() {
    return this.factoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factoriesService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactoryDto: UpdateFactoryDto) {
    return this.factoriesService.update(+id, updateFactoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factoriesService.remove(+id);
  }

  @Post('/add')
  async addColumn(@Body() columnData: { columnName: string; columnType: string }) {
    const { columnName, columnType } = columnData;
    return this.factoriesService.addColumn(columnName, columnType);
  }

  @Delete('removeColumn/:columnName')
  async removeColumn(@Param('columnName') columnName: string) {
    await this.factoriesService.removeColumn(columnName);
    return { message: `Column '${columnName}' has been removed.` };
  }
}

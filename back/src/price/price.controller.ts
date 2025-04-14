import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { PriceService } from './price.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get('all')
  async findAll(): Promise<any> {
    return this.priceService.findAll();
  }

  @Get('active')
  async findActive(): Promise<any> {
    return this.priceService.findActive();
  }

  @Get('forClients') 
  async findForClient(): Promise<any> {
    return this.priceService.findForClient();
  }

  @Get('forCorparations') 
  async findForCorparation(): Promise<any> {
    return this.priceService.findForCorparation();
  }

  @Post()
  async create(@Body() createServiceDto: CreateServiceDto) {
  return this.priceService.create(createServiceDto);
  }

  @Patch(':id')
  async edit(
    @Param('id') id: number,
    @Body() updateData: UpdateServiceDto): Promise<Service | null> {
    const updatedService = await this.priceService.edit(id, updateData);
    return updatedService;
  }
  

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.priceService.delete(id);
  }
}

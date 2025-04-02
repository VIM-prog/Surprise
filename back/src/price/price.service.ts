import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-service.dto';


@Injectable()
export class PriceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}


  async findAll(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  async findActive(): Promise<Service[]> {
    return this.serviceRepository.find({
        where: {active: '1'}
    });
  }

  async edit(id: number, updateData: Partial<Service>): Promise<Service | null> {
    const service = await this.serviceRepository.findOne({ where: { id } });
    if (!service) {
      return null;
    }
    await this.serviceRepository.update(id, updateData);
    return this.serviceRepository.findOne({ where: { id } });
  }

  async delete(_id: number): Promise<Service | null> {
    const service = await this.serviceRepository.findOne({ where: { id: _id } });
    if (service) {
      await this.serviceRepository.delete(_id);
      return service;
    }
    return null;
  }

  async create(CreateServiceDto: CreateServiceDto): Promise<Service> {
    const service = this.serviceRepository.create(CreateServiceDto);
    return this.serviceRepository.save(service);
  }
  /*{
  "title": "ffff",
  "description": "ffff",
  "type": "1",
  "price": "49,99",
  "imgPath": "1"
    } */
}

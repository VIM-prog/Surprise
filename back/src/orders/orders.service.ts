import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entites/orders.entity';
import { IsNull, Repository } from 'typeorm';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private readonly serviceRepository: Repository<Order>,
    ) {}

     async findAll(): Promise<Order[]> {
        return this.serviceRepository.find();
    }

    async findWorkers(): Promise<Order[] | undefined> {
        return this.serviceRepository.find({
            where: {service: IsNull(),  active: '1'}
        })
    }
    async findCostumers(): Promise<Order[] | undefined> {
        return this.serviceRepository.find({
            where: {job: IsNull(), active: '1'}
        })
    }

    async cancelOrder(id: number,): Promise<Order | null> {
    const service = await this.serviceRepository.findOne({ where: { id } });
    if(service) {
        service.active = '0';
        await this.serviceRepository.save(service);
        return service;
    }
    return null;
    }
}

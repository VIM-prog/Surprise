import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entites/orders.entity';
import { IsNull, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
    ) {}

     async findAll(): Promise<Order[]> {
        return this.orderRepository.find();
    }

    async findWorkers(): Promise<Order[] | undefined> {
        return this.orderRepository.find({
            where: {service: IsNull(),  active: '1'}
        })
    }
    async findCostumers(): Promise<Order[] | undefined> {
        return this.orderRepository.find({
            where: {job: IsNull(), active: '1'}
        })
    }

    async cancelOrder(id: number,): Promise<Order | null> {
    const service = await this.orderRepository.findOne({ where: { id } });
    if(service) {
        service.active = '0';
        await this.orderRepository.save(service);
        return service;
    }
        return null;
    }

    async createOrderService(createorderDto: CreateOrderDto): Promise<Order> {
        const  currentDate = new Date();
        const {serviceId, ...orderData} = createorderDto
        const order = this.orderRepository.create({ ...orderData, service: {id: serviceId}, dateOrd: currentDate, active: "1"})
        return this.orderRepository.save(order)
    }

    async createOrderWorker (createorderDto: CreateOrderDto): Promise<Order> {
        const  currentDate = new Date();
        const {JobId, ...orderData} = createorderDto
        const order = this.orderRepository.create({ ...orderData, job: {id: JobId}, dateOrd: currentDate, active: "1"})
        return this.orderRepository.save(order)
    }
}

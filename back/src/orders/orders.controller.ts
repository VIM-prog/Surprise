import { Controller, Get, Param, Patch } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')


export class OrdersController {
    constructor(private readonly orderService: OrdersService) {}
     @Get('all')
      async findAll(): Promise<any> {
      return this.orderService.findAll();
    }

    @Get('jobs')
    async findWorkers(): Promise<any> {
    return this.orderService.findWorkers();
  }

    @Get('services')
    async findCostumers(): Promise<any> {
    return this.orderService.findCostumers();
  }

    @Patch(':id')
    async cancel(@Param('id') id: number): Promise<any> { 
          const cancelOrder = await this.orderService.cancelOrder(id);
          return cancelOrder
    }
}

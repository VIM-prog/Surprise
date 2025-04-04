import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

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

    @Post('service')
    async createCostumers(@Body() createorderDto: CreateOrderDto) {
      return this.orderService.createOrderService(createorderDto)
    }

    @Post('workers')
    async createWorkers(@Body() createorderDto: CreateOrderDto) {
      return this.orderService.createOrderWorker(createorderDto)
    }
}

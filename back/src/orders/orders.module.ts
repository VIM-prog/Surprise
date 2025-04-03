import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entites/jobs.entity';
import { Order } from './entites/orders.entity';
import { Service } from './entites/service.entity';

@Module({
   imports: [TypeOrmModule.forFeature([Job, Order, Service])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PriceModule } from './price/price.module';
import { OrdersModule } from './orders/orders.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports:
  [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PriceModule,
    OrdersModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

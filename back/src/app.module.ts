import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PriceModule } from './price/price.module';
import { OrdersModule } from './orders/orders.module';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:
  [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/**/*.entity{.ts,.js}'], 
    }),
    PriceModule,
    OrdersModule,
    ProjectsModule,
  ],
})
export class AppModule {}

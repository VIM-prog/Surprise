import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderEntity } from './order.entity';

@Entity({ name: 'JOBS' })
export class JobEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'bit' ,  default: 1})
  active: boolean;

  @OneToMany(() => OrderEntity, order => order.job)
  orders: OrderEntity[];
}
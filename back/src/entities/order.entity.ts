import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ServiceEntity } from './service.entity';
import { JobEntity } from './job.entity';

@Entity({ name: 'ORDERS' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  firstname: string;

  @Column({ type: 'varchar', length: 255 })
  lastname: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  surname: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  mail: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone: string;

  @ManyToOne(() => ServiceEntity, service => service.orders, { nullable: true })
  @JoinColumn({ name: 'serviceId' })
  service: ServiceEntity;

  @ManyToOne(() => JobEntity, job => job.orders, { nullable: true })
  @JoinColumn({ name: 'JobId' })
  job: JobEntity;

  @Column({ type: 'date' })
  dateOrd: Date;

  @Column({ type: 'bit' })
  active: boolean;
}
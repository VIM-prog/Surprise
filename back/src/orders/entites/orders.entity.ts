import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Service } from "./service.entity";
import { Job } from "./jobs.entity";

@Entity('ORDERS')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  surname: string;

  @Column()
  mail: string;

  @Column()
  phone: string;

  @Column()
  active: string;

  @Column()
  dateOrd: Date;

  @ManyToOne(() => Service, { eager: true }) 
  @JoinColumn({ name: 'serviceId' }) 
  service: Service;

  @ManyToOne(() => Job, { eager: true })
  @JoinColumn({ name: 'JobId' })
  job: Job;
}
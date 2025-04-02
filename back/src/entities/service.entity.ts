import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { TypeEntity } from './type.entity';
import { ProjectEntity } from './project.entity';
import { OrderEntity } from './order.entity';

@Entity({ name: 'SERVICES' })
export class ServiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imgPath: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @ManyToOne(() => TypeEntity, type => type.services, { nullable: false })
  @JoinColumn({ name: 'type' })
  type: TypeEntity;

  @Column({ type: 'money' })
  price: number;

  @Column({ type: 'bit',  default: 1})
  active: boolean;

  @OneToMany(() => ProjectEntity, project => project.service)
  projects: ProjectEntity[];

  @OneToMany(() => OrderEntity, order => order.service)
  orders: OrderEntity[];
}
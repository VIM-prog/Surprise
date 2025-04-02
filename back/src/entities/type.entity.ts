import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ServiceEntity } from './service.entity';

@Entity({ name: 'TYPE' })
export class TypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @OneToMany(() => ServiceEntity, service => service.type)
  services: ServiceEntity[];
}
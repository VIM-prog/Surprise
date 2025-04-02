import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ServiceEntity } from './service.entity';

@Entity({ name: 'PROJECTS' })
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imgPath: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'varchar', length: 255, name: 'fulldescription' })
  fullDescription: string;

  @ManyToOne(() => ServiceEntity, service => service.projects, { nullable: false })
  @JoinColumn({ name: 'serviceId' })
  service: ServiceEntity;
}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Service } from './service.entity';

@Entity('PROJECTS')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  fulldescription: string;

  @Column()
  imgPath: string;


  @ManyToOne(() => Service, { eager: true }) 
  @JoinColumn({ name: 'serviceId' }) 
   service: Service;
}
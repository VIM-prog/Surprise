import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SERVICES')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
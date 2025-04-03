import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('JOBS')
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
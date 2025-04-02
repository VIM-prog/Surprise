import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SERVICES')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: String;

  @Column()
  imgPath: String;

  @Column()
  type: String;

  @Column()
  active: String;

  @Column()
  price: String;
}
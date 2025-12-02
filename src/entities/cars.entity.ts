
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cars {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  price: number;
  
  @Column()
  is_rented: number;
}

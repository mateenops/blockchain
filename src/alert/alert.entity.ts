import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alert {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chain: string;

  @Column('decimal')
  dollar: number;

  @Column()
  email: string;
}
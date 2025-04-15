import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Environment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serial_number: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  ip: string;
}

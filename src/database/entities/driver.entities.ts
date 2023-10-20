
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn
  } from 'typeorm';
  
  
  @Entity({ name: 'driver' })
  export class Driver {
      
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    name: string;

    @Column('text')
    license: string;
  }
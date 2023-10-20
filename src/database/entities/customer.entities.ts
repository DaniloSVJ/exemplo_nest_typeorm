
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn
  } from 'typeorm';
  
  
  @Entity({ name: 'customer' })
  export class Customer {
      
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    name: string;

    @Column('text')
    cpf: string;
  }
import { text } from 'node:stream/consumers';
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Factory {

    @PrimaryGeneratedColumn()
    id : number;
   
    @Column({type : 'text'})
    factoryName : string;
   
    @CreateDateColumn({type : 'date'})
    membershipDate : Date;
    
    @CreateDateColumn({type : 'date'})
    membershipExpiryDate : Date;
    
    @Column()
    employeeCount : number;
    
    @Column()
    freeMember : boolean;

}

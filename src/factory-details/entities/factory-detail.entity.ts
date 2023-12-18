import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class FactoryDetail {

    @PrimaryGeneratedColumn()
    id : number;
   
    @Column({type : 'text'})
    usingUnit : string;
   
    @CreateDateColumn( {type : 'daterange',default: () => "'[01/01/2023, 12/31/2023)'"})
    dateRange : string;
    
    @Column()
    usageKW : number;
    
    @Column({type : 'decimal'})
    usageFee : number;
    
    @Column()
    cutPrice : boolean;

}

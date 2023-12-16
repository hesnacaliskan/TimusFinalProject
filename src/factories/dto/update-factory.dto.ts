import { PartialType } from '@nestjs/mapped-types';
import { CreateFactoryDto } from './create-factory.dto';

export class UpdateFactoryDto extends PartialType(CreateFactoryDto) {
    
    factoryName : string;   
    
    membershipDate : Date;    
    
    membershipExpiryDate : Date;    
    
    employeeCount : number;    
    
    freeMember : boolean;
}

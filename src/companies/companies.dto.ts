import { IsEmail, IsNotEmpty, Validate } from 'class-validator';
import { CnpjValidator } from './validator-custom';

export class CompaniesDto {
    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    client_name: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    name_company: string

    @Validate(CnpjValidator)
    @IsNotEmpty()
    cnpj: string;

    @IsNotEmpty()
    zip_code: string

    @IsNotEmpty()
    address: string

    @IsNotEmpty()
    number: string

    @IsNotEmpty()
    phone: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    is_admin: boolean
}
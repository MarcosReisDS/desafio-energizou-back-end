import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Repository } from 'typeorm';
import { CompaniesDto } from '../companies.dto';

@Entity("companies")
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  username: string;

  @Column({
    nullable: false
  })
  password: string;

  @Column()
  client_name: string;

  @Column()
  name_company: string;

  @Column()
  cnpj: string;

  @Column()
  zip_code: string;

  @Column()
  address: string;

  @Column()
  number: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  is_admin: boolean

  constructor(company_data: CompaniesDto) {

    this.username = company_data?.username;

    this.client_name = company_data?.client_name;
  
    this.password = company_data?.password;
  
    this.name_company = company_data?.name_company;
  
    this.cnpj = company_data?.cnpj;
  
    this.zip_code = company_data?.zip_code;
  
    this.address = company_data?.address;
  
    this.number = company_data?.number;
  
    this.phone = company_data?.phone;
  
    this.email = company_data?.email;

    this.is_admin = company_data?.is_admin;
  }
}
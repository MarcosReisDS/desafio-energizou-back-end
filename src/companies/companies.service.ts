import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entitys/componies.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company) private companysRepository: Repository<Company>,
  ) { }

  async saveCompany(company: Company): Promise<Company> {
    return await this.companysRepository.save(company);
  }

  async searchCompany(company_cnpj: string | null): Promise<any> {
    if (company_cnpj) {
      return await this.companysRepository.findOne({
        where: {
          cnpj: company_cnpj,
        },
      })
    }

    return await this.companysRepository.find()
  }

  async login(username: string, password: string) {
    return await this.companysRepository.findOne({
      select: ["client_name", "cnpj"],
      where: {
        username,
        password
      },
    })
  }

  async updateCompany(company_id: number, company: Company): Promise<Company> {
    company.id = company_id;
    return await this.companysRepository.save(company);
  }

  async removeCompany(company_id: number | null): Promise<any> {
    const company = await this.companysRepository.findOne({
      where: {
        id: company_id,
      },
    })

    return await this.companysRepository.remove([company])
  }
}

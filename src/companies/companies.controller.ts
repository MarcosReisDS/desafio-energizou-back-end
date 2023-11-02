import { BadRequestException, Body, Controller, Get, Post, Query, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesDto } from './companies.dto';
import { Company } from './entitys/componies.entity';

@Controller({
  path: "companies"
})
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) { }

  @Get("/")
  async searchCompany(
    @Query() query: { company_cnpj?: string }
  ) {
    return this.companiesService.searchCompany(query.company_cnpj)
  }

  @Post("/")
  async addCompany(
    @Body() company_data: CompaniesDto
  ) {
    const company = new Company(company_data);

    return this.companiesService.saveCompany(company);
  }

  @Get("/login")
  async login(
    @Query() company_data: {username: string, password: string}
  ) {

    return await this.companiesService.login(company_data.username, company_data.password);
  }

  @Put("/:id")
  async updateCompany(
    @Param("id", new ParseIntPipe()) company_id: number,
    @Body() company_data: CompaniesDto
  ) {
    const company = new Company(company_data);

    return this.companiesService.updateCompany(company_id, company)
  }

  @Delete("/:id")
  async removeCompany(
    @Param("id") company_id: number
  ) {
    return this.companiesService.removeCompany(company_id);
  }
}

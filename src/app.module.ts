import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './companies/entitys/componies.entity';

@Module({
  imports: [
    CompaniesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'host.docker.internal',
      port: 3306,
      username: 'dev',
      password: 'dev',
      database: 'energizou_desafio',
      entities: [
        Company
      ],
      synchronize: true,
    })
  ]
})
export class AppModule {}

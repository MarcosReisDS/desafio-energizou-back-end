import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { cnpj } from 'cpf-cnpj-validator';

@ValidatorConstraint({ name: 'cnpj', async: false })
export class CnpjValidator implements ValidatorConstraintInterface {
  validate(value: string) {
    return !!cnpj.isValid(value);
  }

  defaultMessage() {
    return 'CNPJ Invalido!';
  }
}

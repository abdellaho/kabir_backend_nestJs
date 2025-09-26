import { PartialType } from '@nestjs/mapped-types';
import { CreateParamPrimeDto } from './create-param-prime.dto';

export class UpdateParamPrimeDto extends PartialType(CreateParamPrimeDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateBilanDto } from './create-bilan.dto';

export class UpdateBilanDto extends PartialType(CreateBilanDto) {}

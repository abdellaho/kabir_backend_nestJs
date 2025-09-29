import { PartialType } from '@nestjs/mapped-types';
import { CreateDetBulttinPaiDto } from './create-det-bulttin-pai.dto';

export class UpdateDetBulttinPaiDto extends PartialType(CreateDetBulttinPaiDto) {}

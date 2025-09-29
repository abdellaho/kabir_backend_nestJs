import { PartialType } from '@nestjs/mapped-types';
import { CreateBulttinPaiDto } from './create-bulttin-pai.dto';

export class UpdateBulttinPaiDto extends PartialType(CreateBulttinPaiDto) {}

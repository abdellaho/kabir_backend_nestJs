import { PartialType } from '@nestjs/mapped-types';
import { CreateDetFactureDto } from './create-det-facture.dto';

export class UpdateDetFactureDto extends PartialType(CreateDetFactureDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateAchatFactureDto } from './create-achat-facture.dto';

export class UpdateAchatFactureDto extends PartialType(CreateAchatFactureDto) {}

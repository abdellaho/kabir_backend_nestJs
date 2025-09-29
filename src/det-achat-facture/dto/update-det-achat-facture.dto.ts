import { PartialType } from '@nestjs/mapped-types';
import { CreateDetAchatFactureDto } from './create-det-achat-facture.dto';

export class UpdateDetAchatFactureDto extends PartialType(CreateDetAchatFactureDto) {}

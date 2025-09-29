import { PartialType } from '@nestjs/mapped-types';
import { CreateImportationDto } from './create-importation.dto';

export class UpdateImportationDto extends PartialType(CreateImportationDto) {}

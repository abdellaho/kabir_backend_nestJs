import { PartialType } from '@nestjs/mapped-types';
import { CreateDetImportationDto } from './create-det-importation.dto';

export class UpdateDetImportationDto extends PartialType(CreateDetImportationDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateBonSortieDto } from './create-bon-sortie.dto';

export class UpdateBonSortieDto extends PartialType(CreateBonSortieDto) {}

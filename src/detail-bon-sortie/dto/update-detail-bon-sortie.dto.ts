import { PartialType } from '@nestjs/mapped-types';
import { CreateDetailBonSortieDto } from './create-detail-bon-sortie.dto';

export class UpdateDetailBonSortieDto extends PartialType(CreateDetailBonSortieDto) {}

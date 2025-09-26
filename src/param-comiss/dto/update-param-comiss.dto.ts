import { PartialType } from '@nestjs/mapped-types';
import { CreateParamComissDto } from './create-param-comiss.dto';

export class UpdateParamComissDto extends PartialType(CreateParamComissDto) {}

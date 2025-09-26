import { PartialType } from '@nestjs/mapped-types';
import { CreateParamPrimeProduitDto } from './create-param-prime-produit.dto';

export class UpdateParamPrimeProduitDto extends PartialType(CreateParamPrimeProduitDto) {}

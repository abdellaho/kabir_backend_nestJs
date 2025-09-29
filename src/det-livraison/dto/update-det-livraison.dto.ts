import { PartialType } from '@nestjs/mapped-types';
import { CreateDetLivraisonDto } from './create-det-livraison.dto';

export class UpdateDetLivraisonDto extends PartialType(CreateDetLivraisonDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateAchatLivraisonDto } from './create-achat-livraison.dto';

export class UpdateAchatLivraisonDto extends PartialType(CreateAchatLivraisonDto) {}

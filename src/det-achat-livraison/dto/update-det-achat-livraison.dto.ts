import { PartialType } from '@nestjs/mapped-types';
import { CreateDetAchatLivraisonDto } from './create-det-achat-livraison.dto';

export class UpdateDetAchatLivraisonDto extends PartialType(CreateDetAchatLivraisonDto) {}

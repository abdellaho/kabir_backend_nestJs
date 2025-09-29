import { PartialType } from '@nestjs/mapped-types';
import { CreateDetBulttinLivraisonDto } from './create-det-bulttin-livraison.dto';

export class UpdateDetBulttinLivraisonDto extends PartialType(CreateDetBulttinLivraisonDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateStockDepotDto } from './create-stock-depot.dto';

export class UpdateStockDepotDto extends PartialType(CreateStockDepotDto) {}

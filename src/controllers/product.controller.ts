import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../entities/product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() product: Partial<Product>): Promise<Product> {
    return this.productService.create(product);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() product: Partial<Product>): Promise<Product> {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.productService.delete(id);
  }
}
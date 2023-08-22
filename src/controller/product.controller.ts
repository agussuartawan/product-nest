import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import { ProductService } from "../service/product.service"
import { Product } from "../entity/product.entity"
import { ProductRequest } from "../dto/request/product.request"
import { SimpleResponseDto } from "../dto/response/simple-response.dto"

@Controller("api/v1/products")
export class ProductController {

    constructor(private readonly productService: ProductService) {}

    @Get()
    async listALl(): Promise<Product[]> {
        return await this.productService.findAll()
    }

    @Get("/:id")
    async findById(@Param("id") id: string): Promise<Product> {
        return await this.productService.findOne(id)
    }

    @Post()
    async create(@Body() req: ProductRequest): Promise<SimpleResponseDto> {
        return await this.productService.create(req)
    }
}
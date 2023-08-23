import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { ProductService } from "../service/product.service"
import { Product } from "../entity/product.entity"
import { ProductRequest } from "../dto/request/product.request"
import { SimpleResponse } from "../dto/response/simple.response"

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
    async create(@Body() req: ProductRequest): Promise<SimpleResponse> {
        return await this.productService.create(req)
    }

    @Put("/:id")
    async update(
        @Param("id") id: string,
        @Body() req: ProductRequest,
    ): Promise<SimpleResponse> {
        return await this.productService.update(req, id)
    }

    @Delete("/:id")
    async delete(@Param("id") id: string): Promise<SimpleResponse> {
        return this.productService
            .delete(id)
            .then(
                (r) =>
                    new SimpleResponse(
                        null,
                        "Product deleted",
                        "Product has deleted perfectly",
                    ),
            )
    }
}

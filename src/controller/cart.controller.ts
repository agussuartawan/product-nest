import { Body, Controller, Get, Post } from "@nestjs/common"
import { CartService } from "../service/cart.service"
import { CartRequest } from "../dto/request/cart.request"
import { SimpleResponse } from "../dto/response/simple.response"
import { CartResponse } from "../dto/response/cart/cart.response"

@Controller("api/v1/carts")
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Get()
    async findAll(): Promise<CartResponse[]> {
        return this.cartService.findAll()
    }

    @Post()
    async create(@Body() req: CartRequest): Promise<SimpleResponse> {
        return this.cartService.create(req)
    }
}

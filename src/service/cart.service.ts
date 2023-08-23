import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Cart } from "../entity/cart.entity"
import { Repository } from "typeorm"
import { SimpleResponse } from "../dto/response/simple.response"
import { CartRequest } from "../dto/request/cart.request"
import { Product } from "../entity/product.entity"
import { CartResponse } from "../dto/response/cart/cart.response"

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(Cart) private cartRepo: Repository<Cart>,
        @InjectRepository(Product) private productRepo: Repository<Product>,
    ) {}

    async findAll(): Promise<CartResponse[]> {
        return CartResponse.of(
            await this.cartRepo
                .createQueryBuilder("cart")
                .select([
                    "cart.id",
                    "cart.qty",
                    "cart.createdAt",
                    "product.id",
                    "product.name",
                    "product.price",
                ])
                .innerJoin("cart.product", "product")
                .execute(),
        )
    }

    async create(req: CartRequest): Promise<SimpleResponse> {
        const product = await this.productRepo
            .findOneBy({ id: req.productId })
            .then((r) => {
                if (!r) throw new NotFoundException("Product not found")
                else return r
            })
        const cart = new Cart(req.qty, product)
        return this.cartRepo.save(cart).then((r) => r.mapToRes())
    }
}

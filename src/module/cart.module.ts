import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Cart } from "../entity/cart.entity"
import { CartService } from "../service/cart.service"
import { CartController } from "../controller/cart.controller"
import { Product } from "../entity/product.entity"

@Module({
    imports: [TypeOrmModule.forFeature([Cart, Product])],
    providers: [CartService],
    controllers: [CartController],
})
export class CartModule {}

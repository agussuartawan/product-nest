import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Cart } from "../entity/cart.entity"

@Module({
    imports: [TypeOrmModule.forFeature([Cart])],
    providers: [],
    controllers: []
})

export class CartModule {}
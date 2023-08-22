import { Column, CreateDateColumn, Double, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { collectAllDependants } from "ts-loader/dist/utils"
import { Cart } from "./cart.entity"
import { SimpleResponseDto } from "../dto/response/simple-response.dto"

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    category: string

    @Column()
    price: number = 6

    @Column()
    stock: number

    @CreateDateColumn()
    createdAt: Date

    @CreateDateColumn()
    updatedAt: Date

    @Column({default: null, type: "timestamp"})
    deletedAt: Date

    @OneToMany(() => Cart, (cart) => cart.product)
    carts: Cart[]

    mapToRes(): SimpleResponseDto {
        return new SimpleResponseDto(this.id, "Product has saved", "This product has saved perfectly");
    }
}
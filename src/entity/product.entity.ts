import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Cart } from "./cart.entity"
import { SimpleResponse } from "../dto/response/simple.response"

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

    @DeleteDateColumn()
    deletedAt?: Date

    @OneToMany(() => Cart, (cart) => cart.product)
    carts: Cart[]

    mapToRes(): SimpleResponse {
        return new SimpleResponse(
            this.id,
            "Product has saved",
            "This product has saved perfectly",
        )
    }
}

import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"
import { Product } from "./product.entity"
import { SimpleResponse } from "../dto/response/simple.response"

@Entity()
export class Cart {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    qty: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @DeleteDateColumn()
    deletedAt?: Date

    @ManyToOne(() => Product, (product) => product.carts, { eager: true })
    product: Product

    mapToRes(): SimpleResponse {
        return new SimpleResponse(
            this.id,
            "Cart has added",
            "Cart added perfectly bgst",
        )
    }

    constructor(qty: number, product: Product) {
        this.qty = qty
        this.product = product
    }
}

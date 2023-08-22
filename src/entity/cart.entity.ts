import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Product } from "./product.entity"

@Entity()
export class Cart {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "date"})
    date: Date

    @Column()
    qty: number

    @ManyToOne(() => Product, (product) => product.carts)
    product: Product

}
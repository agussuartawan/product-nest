import { IsNotEmpty } from "class-validator"

export class ProductRequest {
    @IsNotEmpty()
    name: string
    description: string
    @IsNotEmpty()
    category: string
    @IsNotEmpty()
    price: number
    @IsNotEmpty()
    stock: number
    imageUrl: string
}

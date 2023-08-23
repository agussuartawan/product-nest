import { IsInt, IsNotEmpty } from "class-validator"

export class CartRequest {
    @IsNotEmpty({ message: "Gaboleh kosong bangsat" })
    @IsInt()
    qty: number
    @IsNotEmpty({ message: "Jancuk gabole kosong ni" })
    productId: string
}

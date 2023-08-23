import { Cart } from "../../entity/cart.entity"

export class CartRequest {
    qty: number
    productId: string

    toEntity(): Cart {
        return new Cart(this.qty)
    }
}

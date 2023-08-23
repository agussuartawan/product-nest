import { Cart } from "../../../entity/cart.entity"

export class CartResponse {
    id: string
    qty: number
    createdAt: Date
    productId: string
    productName: string
    productPrice: number

    static of(carts: Cart[]): CartResponse[] {
        return carts.map((r) => {
            const res = new CartResponse()
            res.id = r["cart_id"]
            res.qty = r["cart_qty"]
            res.createdAt = r["cart_createdAt"]
            res.productId = r["product_id"]
            res.productName = r["product_name"]
            res.productPrice = r["product_price"]
            return res
        })
    }
}

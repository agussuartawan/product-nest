import { Product } from "../../../entity/product.entity"

export class ProductClientResponse {
    id: string
    name: string
    price: number
    stock: number
    category: string
    description: string

    constructor(
        id: string,
        name: string,
        price: number,
        stock: number,
        category: string,
        description: string,
    ) {
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
        this.category = category
        this.description = description
    }

    static of(products: Product[]): ProductClientResponse[] {
        return products.map((r) => {
            return new ProductClientResponse(
                r.id,
                r.name,
                r.price,
                r.stock,
                r.category,
                r.description,
            )
        })
    }
}

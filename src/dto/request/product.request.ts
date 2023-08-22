export class ProductRequest {
    name: string
    description: string
    category: string
    price: number = 6
    stock: number

    constructor(name: string, description: string, category: string, price: number, stock: number) {
        this.name = name
        this.description = description
        this.category = category
        this.price = price
        this.stock = stock
    }
}
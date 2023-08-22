import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Product } from "../entity/product.entity"
import { Repository } from "typeorm"
import { SimpleResponseDto } from "../dto/response/simple-response.dto"
import { ProductRequest } from "../dto/request/product.request"

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private productRepo: Repository<Product>) {}

    findAll(): Promise<Product[]> {
        return this.productRepo.find()
    }

    findOne(id: string): Promise<Product | null> {
        return this.productRepo.findOneBy({id})
    }

    create(req: ProductRequest): Promise<SimpleResponseDto> {
        let product = new Product()
        product = this.map(req, product)
        return  this.productRepo.save(product).then(r => r.mapToRes())
    }

    private map(req: ProductRequest, entity: Product): Product {
        entity.name = req.name
        entity.description = req.description
        entity.category = req.category
        entity.price = req.price
        entity.stock = req.stock
        return entity
    }

}
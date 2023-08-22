import { Body, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Product } from "../entity/product.entity"
import { Repository } from "typeorm"
import { ProductRequest } from "../dto/request/product.request"
import { SimpleResponseDto } from "../dto/response/simple-response.dto"

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
        const product = new Product()
        product.name = req.name
        product.description = req.description
        product.category = req.category
        product.price = req.price
        product.stock = req.stock
        return  this.productRepo.save(product).then(r => r.mapToRes())
    }

}
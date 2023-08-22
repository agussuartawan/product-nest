import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Product } from "../entity/product.entity"
import { DeleteResult, Repository, UpdateResult } from "typeorm"
import { SimpleResponseDto } from "../dto/response/simple-response.dto"
import { ProductRequest } from "../dto/request/product.request"

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private productRepo: Repository<Product>) {}

    findAll(): Promise<Product[]> {
        return this.productRepo.find({
            where: {
                deletedAt: null
            }
        })
    }

    findOne(id: string): Promise<Product | null> {
        return this.productRepo.findOneBy({id})
            .then(r => {
                if (r == null) throw new NotFoundException("Product not found")
                return r
            })
    }

    create(req: ProductRequest): Promise<SimpleResponseDto> {
        let product = new Product()
        product = this.map(req, product)
        return  this.productRepo.save(product).then(r => r.mapToRes())
    }

    async update(req: ProductRequest, id: string): Promise<SimpleResponseDto> {
        let product= await this.productRepo.findOneBy({ id })
            .then(r => {
                if (r == null) throw new NotFoundException("Product not found")
                else return r
            })
        product = this.map(req, product)
        return this.productRepo.save(product).then(r => r.mapToRes())
    }

    async delete(id: string): Promise<SimpleResponseDto> {
        const isExists = await this.productRepo.createQueryBuilder("product")
            .where("product.id = :id", {id: id})
            .getExists()
        if (!isExists) {
            throw new NotFoundException("Product not found")
        }
        return await this.productRepo.delete(id).then(r => new SimpleResponseDto(null, "Product deleted", "Product deleted perfectly"))
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
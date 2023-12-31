import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Product } from "../entity/product.entity"
import { In, Like, Repository } from "typeorm"
import { SimpleResponse } from "../dto/response/simple.response"
import { ProductRequest } from "../dto/request/product.request"
import { ProductClientResponse } from "../dto/response/product/product-client.response"
import { CategoryResponse } from "../dto/response/category/category.response"

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private productRepo: Repository<Product>,
    ) {}

    findAll(categories: string[], name: string): Promise<Product[]> {
        const query = this.productRepo
            .createQueryBuilder()
            .where("deletedAt is null")

        if (name)
            query.andWhere("name like concat('%', :name, '%')", { name: name })
        if (categories)
            query.andWhere("category in (:...categories)", {
                categories: categories,
            })

        return query.getMany()
    }

    async findOne(id: string): Promise<Product | null> {
        const r = await this.productRepo.findOneBy({ id })
        if (r == null) throw new NotFoundException("Product not found")
        return r
    }

    async create(req: ProductRequest): Promise<SimpleResponse> {
        let product = new Product()
        product = this.map(req, product)
        const r = await this.productRepo.save(product)
        return r.mapToRes()
    }

    async update(req: ProductRequest, id: string): Promise<SimpleResponse> {
        let product = await this.productRepo.findOneBy({ id }).then((r) => {
            if (r == null) throw new NotFoundException("Product not found")
            else return r
        })
        product = this.map(req, product)
        return this.productRepo.save(product).then((r) => r.mapToRes())
    }

    async delete(id: string): Promise<SimpleResponse> {
        const isExists = await this.productRepo
            .createQueryBuilder("product")
            .where("product.id = :id", { id: id })
            .getExists()
        if (!isExists) {
            throw new NotFoundException("Product not found")
        }
        return await this.productRepo
            .softDelete(id)
            .then(
                () =>
                    new SimpleResponse(
                        null,
                        "Product deleted",
                        "Product deleted perfectly",
                    ),
            )
    }

    async findByIds(ids: string[]): Promise<ProductClientResponse[]> {
        const products = await this.productRepo
            .createQueryBuilder("product")
            .select(["id", "name", "price", "stock", "category", "description"])
            .where({ id: In(ids) })
            .execute()

        return ProductClientResponse.of(products)
    }

    async findCategories(): Promise<CategoryResponse> {
        const categories = await this.productRepo
            .createQueryBuilder("product")
            .select("category")
            .groupBy("category")
            .execute()
        return new CategoryResponse(categories.map((val) => val.category))
    }

    private map(req: ProductRequest, entity: Product): Product {
        entity.name = req.name
        entity.description = req.description
        entity.category = req.category
        entity.price = req.price
        entity.stock = req.stock
        entity.imageUrl = req.imageUrl
        return entity
    }
}

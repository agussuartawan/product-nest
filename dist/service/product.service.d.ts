import { Product } from "../entity/product.entity";
import { Repository } from "typeorm";
import { SimpleResponse } from "../dto/response/simple.response";
import { ProductRequest } from "../dto/request/product.request";
import { ProductClientResponse } from "../dto/response/product/product-client.response";
import { CategoryResponse } from "../dto/response/category/category.response";
export declare class ProductService {
    private productRepo;
    constructor(productRepo: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product | null>;
    create(req: ProductRequest): Promise<SimpleResponse>;
    update(req: ProductRequest, id: string): Promise<SimpleResponse>;
    delete(id: string): Promise<SimpleResponse>;
    findByIds(ids: string[]): Promise<ProductClientResponse[]>;
    findCategories(): Promise<CategoryResponse>;
    private map;
}

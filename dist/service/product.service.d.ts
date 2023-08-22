import { Product } from "../entity/product.entity";
import { Repository } from "typeorm";
import { SimpleResponseDto } from "../dto/response/simple-response.dto";
import { ProductRequest } from "../dto/request/product.request";
export declare class ProductService {
    private productRepo;
    constructor(productRepo: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product | null>;
    create(req: ProductRequest): Promise<SimpleResponseDto>;
    private map;
}

import { ProductService } from "../service/product.service";
import { Product } from "../entity/product.entity";
import { ProductRequest } from "../dto/request/product.request";
import { SimpleResponse } from "../dto/response/simple.response";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    listALl(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    create(req: ProductRequest): Promise<SimpleResponse>;
    update(id: string, req: ProductRequest): Promise<SimpleResponse>;
    delete(id: string): Promise<SimpleResponse>;
}

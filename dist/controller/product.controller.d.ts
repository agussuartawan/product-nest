import { ProductService } from "../service/product.service";
import { Product } from "../entity/product.entity";
import { ProductRequest } from "../dto/request/product.request";
import { SimpleResponseDto } from "../dto/response/simple-response.dto";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    listALl(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    create(req: ProductRequest): Promise<SimpleResponseDto>;
    update(id: string, req: ProductRequest): Promise<SimpleResponseDto>;
    delete(id: string): Promise<SimpleResponseDto>;
}

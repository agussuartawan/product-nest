import { ProductService } from "../service/product.service";
import { Product } from "../entity/product.entity";
import { ProductRequest } from "../dto/request/product.request";
import { SimpleResponse } from "../dto/response/simple.response";
import { IdsRequest } from "../dto/request/ids.request";
import { ProductClientResponse } from "../dto/response/product/product-client.response";
import { CategoryResponse } from "../dto/response/category/category.response";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    listALl(categories?: string[], name?: string): Promise<Product[]>;
    findByIds(req: IdsRequest): Promise<ProductClientResponse[]>;
    findById(id: string): Promise<Product>;
    create(req: ProductRequest): Promise<SimpleResponse>;
    update(id: string, req: ProductRequest): Promise<SimpleResponse>;
    delete(id: string): Promise<SimpleResponse>;
    getCategories(): Promise<CategoryResponse>;
}

import { Product } from "./product.entity";
import { SimpleResponse } from "../dto/response/simple.response";
export declare class Cart {
    id: string;
    qty: number;
    createdAt: Date;
    updateAt: Date;
    product: Product;
    mapToRes(): SimpleResponse;
    constructor(qty: number);
}

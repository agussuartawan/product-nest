import { Cart } from "./cart.entity";
import { SimpleResponse } from "../dto/response/simple.response";
export declare class Product {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    carts: Cart[];
    mapToRes(): SimpleResponse;
}

import { Cart } from "./cart.entity";
import { SimpleResponseDto } from "../dto/response/simple-response.dto";
export declare class Product {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    carts: Cart[];
    mapToRes(): SimpleResponseDto;
}

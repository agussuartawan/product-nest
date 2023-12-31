"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../entity/product.entity");
const typeorm_2 = require("typeorm");
const simple_response_1 = require("../dto/response/simple.response");
const product_client_response_1 = require("../dto/response/product/product-client.response");
const category_response_1 = require("../dto/response/category/category.response");
let ProductService = exports.ProductService = class ProductService {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    findAll(categories, name) {
        const query = this.productRepo
            .createQueryBuilder()
            .where("deletedAt is null");
        if (name)
            query.andWhere("name like concat('%', :name, '%')", { name: name });
        if (categories)
            query.andWhere("category in (:...categories)", {
                categories: categories,
            });
        return query.getMany();
    }
    async findOne(id) {
        const r = await this.productRepo.findOneBy({ id });
        if (r == null)
            throw new common_1.NotFoundException("Product not found");
        return r;
    }
    async create(req) {
        let product = new product_entity_1.Product();
        product = this.map(req, product);
        const r = await this.productRepo.save(product);
        return r.mapToRes();
    }
    async update(req, id) {
        let product = await this.productRepo.findOneBy({ id }).then((r) => {
            if (r == null)
                throw new common_1.NotFoundException("Product not found");
            else
                return r;
        });
        product = this.map(req, product);
        return this.productRepo.save(product).then((r) => r.mapToRes());
    }
    async delete(id) {
        const isExists = await this.productRepo
            .createQueryBuilder("product")
            .where("product.id = :id", { id: id })
            .getExists();
        if (!isExists) {
            throw new common_1.NotFoundException("Product not found");
        }
        return await this.productRepo
            .softDelete(id)
            .then(() => new simple_response_1.SimpleResponse(null, "Product deleted", "Product deleted perfectly"));
    }
    async findByIds(ids) {
        const products = await this.productRepo
            .createQueryBuilder("product")
            .select(["id", "name", "price", "stock", "category", "description"])
            .where({ id: (0, typeorm_2.In)(ids) })
            .execute();
        return product_client_response_1.ProductClientResponse.of(products);
    }
    async findCategories() {
        const categories = await this.productRepo
            .createQueryBuilder("product")
            .select("category")
            .groupBy("category")
            .execute();
        return new category_response_1.CategoryResponse(categories.map((val) => val.category));
    }
    map(req, entity) {
        entity.name = req.name;
        entity.description = req.description;
        entity.category = req.category;
        entity.price = req.price;
        entity.stock = req.stock;
        entity.imageUrl = req.imageUrl;
        return entity;
    }
};
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductService);
//# sourceMappingURL=product.service.js.map
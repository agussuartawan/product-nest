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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("../service/product.service");
const product_request_1 = require("../dto/request/product.request");
const simple_response_1 = require("../dto/response/simple.response");
const ids_request_1 = require("../dto/request/ids.request");
let ProductController = exports.ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async listALl(categories, name) {
        console.log(categories);
        return await this.productService.findAll(categories, name);
    }
    async findByIds(req) {
        return await this.productService.findByIds(req.ids);
    }
    async findById(id) {
        return await this.productService.findOne(id);
    }
    async create(req) {
        return await this.productService.create(req);
    }
    async update(id, req) {
        return await this.productService.update(req, id);
    }
    async delete(id) {
        return this.productService
            .delete(id)
            .then(() => new simple_response_1.SimpleResponse(null, "Product deleted", "Product has deleted perfectly"));
    }
    async getCategories() {
        return this.productService.findCategories();
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("categories")),
    __param(1, (0, common_1.Query)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "listALl", null);
__decorate([
    (0, common_1.Post)("/find-by-ids"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ids_request_1.IdsRequest]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findByIds", null);
__decorate([
    (0, common_1.Get)("/:id/detail"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_request_1.ProductRequest]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_request_1.ProductRequest]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)("/categories"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getCategories", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)("api/v1/products"),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map
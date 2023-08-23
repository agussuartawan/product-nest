"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cart_entity_1 = require("../entity/cart.entity");
const cart_service_1 = require("../service/cart.service");
const cart_controller_1 = require("../controller/cart.controller");
const product_entity_1 = require("../entity/product.entity");
let CartModule = exports.CartModule = class CartModule {
};
exports.CartModule = CartModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cart_entity_1.Cart, product_entity_1.Product])],
        providers: [cart_service_1.CartService],
        controllers: [cart_controller_1.CartController],
    })
], CartModule);
//# sourceMappingURL=cart.module.js.map
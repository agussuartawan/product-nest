import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm"
import { Product } from "./entity/product.entity"
import { Cart } from "./entity/cart.entity"
import { ProductController } from "./controller/product.controller"
import { ProductService } from "./service/product.service"
import { ProductModule } from "./module/product.module"
import { CartModule } from "./module/cart.module"

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "product_cart",
      autoLoadEntities: true,
      synchronize: true
    }),
    ProductModule, CartModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ProductModule } from "./module/product.module"
import { CartModule } from "./module/cart.module"
import { FirebaseModule } from "./firebase/firebase.module"

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "103.226.139.177",
            port: 3306,
            username: "onion",
            password: "R3m0t3##0n!o11",
            database: "product_nest",
            autoLoadEntities: true,
            synchronize: true,
            logging: true,
        }),
        ProductModule,
        CartModule,
        FirebaseModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

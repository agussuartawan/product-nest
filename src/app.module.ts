import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ProductModule } from "./module/product.module"
import { CartModule } from "./module/cart.module"
import { FirebaseModule } from "./firebase/firebase.module"
import { NotificationModule } from "./module/notification.module"
import * as process from "process"
import * as dotenv from "dotenv"
import * as path from "path"

dotenv.config({
    path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
})

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: process.env.DATABASE_HOST,
            port: Number(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            autoLoadEntities: true,
            synchronize: true,
            logging: true,
        }),
        ProductModule,
        CartModule,
        FirebaseModule,
        NotificationModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

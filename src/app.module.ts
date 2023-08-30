import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ProductModule } from "./module/product.module"
import { CartModule } from "./module/cart.module"
import { FirebaseModule } from "./firebase/firebase.module"
import { NotificationModule } from "./module/notification.module"
import { TypeOrmModule } from "@nestjs/typeorm"
import * as dotenv from "dotenv"
import * as path from "path"

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "dev"
dotenv.config({
    path: path.resolve(__dirname, `../.${ENV}.env`),
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

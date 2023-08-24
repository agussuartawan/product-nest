import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Notification } from "../entity/notification.entity"
import { NotificationToken } from "../entity/notification-token.entity"
import {
    NotificationService,
    NotificationTokenService,
} from "../service/notification.service"
import {
    NotificationController,
    NotificationTokenController,
} from "../controller/notification.controller"

@Module({
    imports: [TypeOrmModule.forFeature([NotificationToken])],
    providers: [NotificationTokenService],
    controllers: [NotificationTokenController],
})
export class NotificationTokenModule {}

@Module({
    imports: [
        TypeOrmModule.forFeature([Notification]),
        NotificationTokenModule,
    ],
    providers: [NotificationService],
    controllers: [NotificationController],
})
export class NotificationModule {}

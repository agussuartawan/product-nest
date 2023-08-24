import { InjectRepository } from "@nestjs/typeorm"
import { Injectable, NotFoundException } from "@nestjs/common"
import { Notification } from "../entity/notification.entity"
import { Repository } from "typeorm"
import { NotificationToken } from "../entity/notification-token.entity"
import { SimpleResponse } from "../dto/response/simple.response"
import {
    NotificationStatusRequest,
    NotificationTokenRequest,
} from "../dto/request/notification.request"

@Injectable()
export class NotificationService {
    constructor(
        @InjectRepository(Notification)
        private notificationRepo: Repository<Notification>,
    ) {}
}

@Injectable()
export class NotificationTokenService {
    constructor(
        @InjectRepository(NotificationToken)
        private notificationTokenRepo: Repository<NotificationToken>,
    ) {}

    async registerToken(
        req: NotificationTokenRequest,
    ): Promise<SimpleResponse> {
        const token = new NotificationToken(req.token, req.device)
        await this.notificationTokenRepo.save(token)
        return SimpleResponse.ofSuccess(token.id)
    }

    async statusToggle(
        id: string,
        req: NotificationStatusRequest,
    ): Promise<SimpleResponse> {
        const token = await this.findByIdOptional(id)
        token.status = req.status
        await this.notificationTokenRepo.save(token)
        return SimpleResponse.ofSuccess(token.id)
    }

    findByIdOptional(id: string): Promise<NotificationToken> {
        return this.notificationTokenRepo.findOneBy({ id }).then((res) => {
            if (res) return res
            else throw new NotFoundException("Token not found")
        })
    }
}

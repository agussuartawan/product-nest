import { Body, Controller, Param, Post, Put } from "@nestjs/common"
import { NotificationTokenService } from "../service/notification.service"
import {
    NotificationStatusRequest,
    NotificationTokenRequest,
} from "../dto/request/notification.request"
import { SimpleResponse } from "../dto/response/simple.response"

@Controller("api/v1/notification-tokens")
export class NotificationTokenController {
    constructor(
        private readonly notificationTokenService: NotificationTokenService,
    ) {}

    @Post()
    async registerToken(
        @Body() req: NotificationTokenRequest,
    ): Promise<SimpleResponse> {
        return this.notificationTokenService.registerToken(req)
    }

    @Put("/:id")
    async statusToggle(
        @Body() req: NotificationStatusRequest,
        @Param("id") id: string,
    ): Promise<SimpleResponse> {
        return this.notificationTokenService.statusToggle(id, req)
    }
}

@Controller("/api/v1/notifications")
export class NotificationController {}

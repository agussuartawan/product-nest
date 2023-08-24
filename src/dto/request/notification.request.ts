import { IsNotEmpty } from "class-validator"
import { DeviceType, Status } from "../enum/enum"

export class NotificationTokenRequest {
    @IsNotEmpty()
    token: string

    @IsNotEmpty()
    device: DeviceType
}

export class NotificationStatusRequest {
    @IsNotEmpty()
    status: Status
}

export class NotificationRequest {}

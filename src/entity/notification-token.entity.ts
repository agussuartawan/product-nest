import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { DeviceType, Status } from "../dto/enum/enum"
import { Notification } from "./notification.entity"

@Entity()
export class NotificationToken {
    constructor(token: string, deviceType: DeviceType) {
        this.token = token
        this.deviceType = deviceType
    }

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    token: string

    @Column({
        type: "enum",
        enum: DeviceType,
        default: DeviceType.WEB,
    })
    deviceType: DeviceType

    @Column({
        type: "enum",
        enum: Status,
        default: Status.ACTIVE,
    })
    status: Status

    @OneToMany(() => Notification, (notification) => notification.token)
    notifications: Notification[]
}

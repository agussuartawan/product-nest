import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Status } from "../dto/enum/enum"
import { NotificationToken } from "./notification-token.entity"

@Entity()
export class Notification {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string

    @Column()
    message: string

    @Column({
        type: "enum",
        enum: Status,
        default: Status.INFO,
    })
    status: Status

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => NotificationToken, (token) => token.notifications)
    token: NotificationToken
}

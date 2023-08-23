import { Injectable } from "@nestjs/common"
import * as admin from "firebase-admin"

@Injectable()
export class FirebaseService {
    private messaging = admin.messaging()

    async sendNotification(
        topic: string,
        payload: admin.messaging.MessagingPayload,
    ) {
        try {
            const res = await this.messaging.sendToTopic(topic, payload)
            console.log(`Success send message: ${res}`)
        } catch (error) {
            console.error(`Error sending message: ${error}`)
        }
    }
}

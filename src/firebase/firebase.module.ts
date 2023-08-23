import { Module } from "@nestjs/common"
import { FirebaseService } from "./firebase.service"
import * as admin from "firebase-admin"

import * as serviceAccount from "./product-cart.json"

@Module({
    providers: [FirebaseService],
    exports: [FirebaseService],
})
export class FirebaseModule {
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        })
    }
}

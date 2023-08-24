import { Logger, Module } from "@nestjs/common"
import { FirebaseService } from "./firebase.service"
import * as admin from "firebase-admin"

@Module({
    providers: [FirebaseService],
    exports: [FirebaseService],
})
export class FirebaseModule {
    private readonly logger = new Logger(FirebaseModule.name)
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(
                "./src/firebase/product-cart.json",
            ),
        })
        this.logger.log("Firebase telah di init...")
    }
}

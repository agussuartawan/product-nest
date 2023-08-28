import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { Logger, ValidationPipe } from "@nestjs/common"

async function bootstrap() {
    const logger = new Logger("main.ts")

    const app = await NestFactory.create(AppModule, {
        logger: ["warn", "error", "log"],
    })
    app.enableCors()
    app.useGlobalPipes(new ValidationPipe())
    await app.listen(process.env.PORT)
    logger.log(`Server started at port ${process.env.PORT}`)
}

bootstrap()

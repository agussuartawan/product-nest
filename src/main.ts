import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { ValidationPipe } from "@nestjs/common"

async function bootstrap() {
<<<<<<< HEAD
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(3000);

=======
    const app = await NestFactory.create(AppModule)
    app.enableCors()
    app.useGlobalPipes(new ValidationPipe())
    await app.listen(3000)
>>>>>>> b339f12a8622bdda714ca86a4edf955a9be849d3
}

bootstrap()

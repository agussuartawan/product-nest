"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger("main.ts");
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ["warn", "error", "log"],
    });
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process.env.PORT);
    logger.log(`Server started at port ${process.env.PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map
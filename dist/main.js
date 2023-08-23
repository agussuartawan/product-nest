"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
<<<<<<< HEAD
=======
    app.useGlobalPipes(new common_1.ValidationPipe());
>>>>>>> b339f12a8622bdda714ca86a4edf955a9be849d3
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
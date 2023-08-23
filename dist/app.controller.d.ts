import { AppService } from "./app.service";
import { SimpleResponse } from "./dto/response/simple.response";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    helloName(name: string): string;
    helloBody(name: string): string;
    helloParam(name: string): string;
    helloDto(body: SimpleResponse): SimpleResponse;
}

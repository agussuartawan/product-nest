import { AppService } from './app.service';
import { SimpleResponseDto } from "./dto/response/simple-response.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    helloName(name: string): string;
    helloBody(name: string): string;
    helloParam(name: string): string;
    helloDto(body: SimpleResponseDto): SimpleResponseDto;
}

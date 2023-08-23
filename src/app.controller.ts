import { Body, Controller, Get, Param, Query } from "@nestjs/common"
import { AppService } from "./app.service"
import { SimpleResponse } from "./dto/response/simple.response"

@Controller("api/v1/learn")
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("/hello-world")
    getHello(): string {
        return this.appService.getHello()
    }

    @Get("/hello-name")
    helloName(@Query("name") name: string): string {
        return this.appService.helloName(name)
    }

    @Get("/hello-body")
    helloBody(@Body("name") name: string): string {
        return this.appService.helloName(name)
    }

    @Get("/hello-param/:name")
    helloParam(@Param("name") name: string): string {
        return this.appService.helloName(name)
    }

    @Get("/hello-dto")
    helloDto(@Body() body: SimpleResponse): SimpleResponse {
        return new SimpleResponse(null, body.message, body.details)
    }
}

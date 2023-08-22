export class SimpleResponseDto {
    constructor(id: string, message: string, details: string) {
        this.id = id
        this.message = message;
        this.details = details;
    }

    id: string
    message: string
    details: string
}
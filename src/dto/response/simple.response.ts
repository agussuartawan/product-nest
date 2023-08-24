export class SimpleResponse {
    constructor(id: string, message: string, details: string) {
        this.id = id
        this.message = message
        this.details = details
    }

    static ofSuccess(id: string): SimpleResponse {
        return new SimpleResponse(
            id,
            "Data saved successfully",
            "Data has been saved with no error",
        )
    }

    static ofError(message: string): SimpleResponse {
        return new SimpleResponse(null, "Data saved failed", message)
    }

    id: string
    message: string
    details: string
}

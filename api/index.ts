import { RequestParams, WebFetcher, WebResponse } from "./fetcher";

export class LunataskApiClient {
    private token: string;
    private fetcher: WebFetcher;

    constructor(token: string, fetcher: WebFetcher) {
        this.token = token;
        this.fetcher = fetcher;
    }

    public async makeApiCall(path: string, method: string, payload?: object): Promise<WebResponse> {
        const params: RequestParams = {
            url: `https://api.lunatask.app/v1${path}`,
            method: method,
            headers: {
                Authorization: `bearer ${this.token}`
            },
        }

        if (payload !== undefined) {
            params.body = JSON.stringify(payload);
            params.headers["Content-Type"] = "application/json";
        }

        const response = await this.fetcher.fetch(params);

        if (response.statusCode >= 400) {
            throw new LunataskApiError(params, response);
        }

        return response;
    }

    public async ping(): Promise<void> {
        const response = await this.makeApiCall("/ping", "GET");
        console.log("Ping response:", response.body);
    }
}

export class LunataskApiError extends Error {
    public statusCode: number;

    constructor(params: RequestParams, response: WebResponse) {
        const message = `[${params.method}] ${params.url} returned '${response.statusCode}: ${response.body}`;
        super(message);
        this.statusCode = response.statusCode;
        this.name = "LunataskApiError";
    }
}    
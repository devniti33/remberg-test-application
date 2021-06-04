import { NameResponse } from "./nameResponse";

export interface NameAPIResponse {
    names: NameResponse[],
    count: number
}
import { NameResponse } from "./nameResponse";
import { SelectionAPIResponse } from "./selectionAPIResponse";

export interface APIResponse {
    readonly data: {
        names: NameResponse[];
        count: number;
        selections: SelectionAPIResponse[];
    }
}
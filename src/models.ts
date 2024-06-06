export interface SearchPeopleRequest {
    query: string;
}

export interface SearchPeopleResponse {
    page: number;
    resultCount: number;
    name: string;
    films: string[];
    error:string;
}
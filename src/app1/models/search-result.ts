import { Video } from './video';

export class SearchResult {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    };
    items: Video[];
}

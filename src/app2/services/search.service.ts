import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { keys } from '../../keys';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Video } from '../models/video';
import { SearchResult } from '../models/search-result';
import { Observable } from 'rxjs/Observable';

const base = 'https://www.googleapis.com/youtube/v3'

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  public search(query: string): Observable<Video> {
    // return Observable.of({
    //   snippet: {
    //     title: query,
    //     thumbnails: {
    //       default: {
    //         url: '',
    //         width: 120,
    //         height: 100
    //       }
    //     }
    //   }
    // } as Video);
    const url = `${base}/search?part=snippet&key=${keys.apiKey}&maxResults=1&topicId=/m/04rlf&q=${query}`;
    return this.http.get(url)
        .map(res => res.json() as SearchResult)
        .map((res) => res.items[0])
        .switchMap((res) => {
          return this.http.get(`${base}/videos?part=snippet,contentDetails&key=${keys.apiKey}&maxResults=1&id=${res.id.videoId}`);
        })
        .map((res) => res.json())
        .map((res) => res.items[0]);
  }

}

import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';

import { SearchService } from '../../services/search.service';

import { Video } from '../../models/video';

import * as Videos from './videos.actions';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/exhaustMap';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class VideosEffects {

  @Effect()
  executeVideos = this.actions$
                      .ofType(Videos.VIDEOS_INIT)
                      .map((action: Videos.VideosInit) => action.payload)
                      .exhaustMap((query: string[]) => {
                        return this.searchService
                                   .search(query.join(','))
                                   .map((video) => new Videos.VideosComplete(video))
                                   .catch(() => Observable.of(new Videos.VideosComplete(null)));
                      });

  constructor(private actions$: Actions,
              private searchService: SearchService) { }
}

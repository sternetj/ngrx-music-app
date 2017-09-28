import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SearchService } from '../services/search.service';
import { AppState } from '../state';
import { Store } from '@ngrx/store';

import * as videos from '../state/videos/videos.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  public searchTerm = '';
  constructor(private searchService: SearchService,
    private store: Store<AppState>) { }

  public addVideo() {
    this.store.dispatch(new videos.Add(this.searchTerm.split(' ')));
    this.searchTerm = '';
  }
}

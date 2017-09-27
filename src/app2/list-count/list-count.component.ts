import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, selectVideos } from '../state';

@Component({
  selector: 'app-list-count',
  templateUrl: './list-count.component.html',
  styleUrls: ['./list-count.component.css']
})
export class ListCountComponent implements OnInit {
  public videoCount$: Observable<number>;

  constructor(private store: Store<AppState>) { }

    ngOnInit() {
      this.videoCount$ = this.store.select(selectVideos).map((videos) => videos.length);
    }

}

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, selectVideos } from '../state';
import { Video } from '../models/video';

import * as Videos from '../state/videos/videos.actions';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html'
})
export class VideoListComponent implements OnInit {
  public videoList$: Observable<Video[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.videoList$ = this.store.select(selectVideos);
  }

  moveUp(video: Video) {
    this.store.dispatch(new Videos.MoveUp(video));
  }

  moveDown(video: Video) {
    this.store.dispatch(new Videos.MoveDown(video));
  }

  remove(video: Video) {
    this.store.dispatch(new Videos.Remove(video));
  }
}

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, selectVideos } from '../state';
import { Video } from '../models/video';

import * as videos from '../state/videos/videos.actions';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  public videoList$: Observable<Video[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.videoList$ = this.store.select(selectVideos);
  }

  moveUp(video: Video) {

  }

  moveDown(video: Video) {

  }

  remove(video: Video) {
    // this.store.dispatch
  }
}

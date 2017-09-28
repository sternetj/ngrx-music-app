import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { VideoService } from '../services/video.service';
import { Video } from '../models/video';
import doCheck from '../../app2/utils/do-check';

@Component({
  selector: 'app-list-count',
  templateUrl: './list-count.component.html'
})
export class ListCountComponent {
  public videoList$: Observable<Video[]>;

  constructor(videoService: VideoService) {
    this.videoList$ = videoService.videoList;
  }
}

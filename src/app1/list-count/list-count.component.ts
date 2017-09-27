import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { VideoService } from '../services/video.service';
import { Video } from '../models/video';

@Component({
  selector: 'app-list-count',
  templateUrl: './list-count.component.html',
  styleUrls: ['./list-count.component.css']
})
export class ListCountComponent {
  public videoList$: Observable<Video[]>;

  constructor(videoService: VideoService) {
    this.videoList$ = videoService.videoList;
  }

}

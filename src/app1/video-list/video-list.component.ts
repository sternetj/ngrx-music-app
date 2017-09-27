import { Component, OnInit } from '@angular/core';

import { VideoService } from '../services/video.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  videoList$: Observable<any[]>;

  constructor(videoService: VideoService) {
    this.videoList$ = videoService.videoList;
  }

}

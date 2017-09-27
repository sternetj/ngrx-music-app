import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../models/video';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-tile',
  templateUrl: './video-tile.component.html',
  styleUrls: ['./video-tile.component.css']
})
export class VideoTileComponent {
  @Input() public video: Video;

  constructor(private videoService: VideoService) { }

  public moveUp() {
    this.videoService.moveUp(this.video);
  }
  
  public moveDown() {
    this.videoService.moveDown(this.video);
  }
  
  public remove() {
    this.videoService.delete(this.video);
  }
}

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Video } from '../../models/video';

@Component({
  selector: 'app-video-tile',
  templateUrl: './video-tile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoTileComponent {
  @Input() public video: Video;
  @Output() public moveUp = new EventEmitter<Video>();
  @Output() public moveDown = new EventEmitter<Video>();
  @Output() public remove = new EventEmitter<Video>();
}

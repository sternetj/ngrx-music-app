import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { VideoService } from '../services/video.service';
import doCheck from '../../app2/utils/do-check';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public searchTerm = '';
  constructor(private searchService: SearchService,
    private videoService: VideoService) { }

  addVideo() {
    this.searchService.search(this.searchTerm.split(' ').join(',')).subscribe((video) => {
      this.videoService.addVideo(video);
    });
    this.searchTerm = '';
  }
}

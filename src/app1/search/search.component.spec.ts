import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { SearchComponent } from './search.component';
import { SearchService } from '../services/search.service';
import { VideoService } from '../services/video.service';
import { Video } from '../models/video';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  const sampleVideo = {
    snippet: {
      title: 'test video'
    }
  } as Video;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        { provide: SearchService, useValue: { search: () => Observable.of(sampleVideo)}},
        { provide: VideoService, useValue: { addVideo: () => undefined}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a video', () => {
    const searchSvc = TestBed.get(SearchService);
    const videoSvc = TestBed.get(VideoService);
    const searchSpy = spyOn(searchSvc, 'search');
    const addVideoSpy = spyOn(videoSvc, 'addVideo');
    component.searchTerm = 'test video';

    component.addVideo();

    expect(searchSpy).toHaveBeenCalledWith('test,video');
    expect(addVideoSpy).toHaveBeenCalledWith(sampleVideo);
  });
});

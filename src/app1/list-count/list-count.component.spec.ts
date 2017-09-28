import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCountComponent } from './list-count.component';
import { VideoService } from '../services/video.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MaterialModule } from '@angular/material';

describe('ListCountComponent', () => {
  let component: ListCountComponent;
  let fixture: ComponentFixture<ListCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCountComponent ],
      imports: [ MaterialModule ],
      providers: [
        { provide: VideoService, videoList: Observable.of([])}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

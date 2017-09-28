import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/never';

import * as videos from '../state/videos/videos.actions';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [
        { provide: Store, useValue: { dispatch: () => Observable.never() } },
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
    const storeStub = TestBed.get(Store);
    const dispatchSpy = spyOn(storeStub, 'dispatch');
    component.searchTerm = 'test video';

    component.addVideo();

    expect(dispatchSpy).toHaveBeenCalledWith(new videos.Add(['test', 'video']));
  });
});

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { VideoListComponent } from './video-list/video-list.component';
import { SearchService } from './services/search.service';
import { VideoService } from './services/video.service';
import { VideoTileComponent } from './video-list/video-tile/video-tile.component';
import { ListCountComponent } from './list-count/list-count.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VideoListComponent,
    VideoTileComponent,
    ListCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdInputModule
  ],
  providers: [
    VideoService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

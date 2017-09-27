import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdInputModule } from '@angular/material';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { VideoListComponent } from './video-list/video-list.component';
import { SearchService } from './services/search.service';
import { VideoTileComponent } from './video-list/video-tile/video-tile.component';
import { ListCountComponent } from './list-count/list-count.component';

import { effects, reducers } from './state';

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
    StoreModule.forRoot('app', reducers),
    EffectsModule.forRoot(effects),
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

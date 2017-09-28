import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ActionReducerMap } from '@ngrx/store';

import * as videosEffects from './videos/videos.effects';
import * as videosReducer from './videos/videos.reducer';

export interface AppState {
  videos: videosReducer.State;
}

export const reducers: ActionReducerMap<any> = {
    videos: videosReducer.reducer,
};

export const effects = [
    videosEffects.VideosEffects,
];

export const selectApp = createFeatureSelector<videosReducer.State>('videos');
export const selectVideos = createSelector(selectApp, (state: videosReducer.State) => state.videos);

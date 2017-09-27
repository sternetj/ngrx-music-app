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

export const selectApp = createFeatureSelector<AppState>('app');
export const selectVideos = createSelector(selectApp, (state: AppState) => state.videos.videos);
// export const selectFirstSearch = createSelector(selectCdos, (state: AppState) => state.search.searched);
// export const selectQuery = createSelector(selectCdos, (state: AppState) => state.search.query);
// export const selectValid = createSelector(selectCdos, (state: AppState) => state.search.valid);
// export const selectDocument = createSelector(selectCdos, (state: AppState) => state.document.document);
// export const selectFilters = createSelector(selectCdos, (state: AppState) => state.filter.filters);
// export const selectDisplay = createSelector(selectCdos, (state: AppState) => state.display);

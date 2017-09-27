import { Action } from '@ngrx/store';
import { Video } from '../../models/video';

export const VIDEOS_INIT = '[Videos] Videos Init';
export const VIDEOS_COMPLETE = '[Videos] Videos Complete';

export class VideosInit implements Action {
  readonly type = VIDEOS_INIT;

  constructor(public payload: string[]) { }
}

export class VideosComplete implements Action {
  readonly type  = VIDEOS_COMPLETE;

  constructor(public payload: Video) {}
}

export type Actions = VideosInit | VideosComplete;

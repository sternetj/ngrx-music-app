import { Action } from '@ngrx/store';
import { Video } from '../../models/video';

export const VIDEOS_ADD = '[Videos] Videos Add';
export const VIDEOS_ADD_COMPLETE = '[Videos] Videos Add Complete';
export const VIDEOS_MOVE_UP = '[Videos] Videos Move Up';
export const VIDEOS_MOVE_DOWN = '[Videos] Videos Move Down';
export const VIDEOS_REMOVE = '[Videos] Videos Remove';

export class Add implements Action {
  readonly type = VIDEOS_ADD;

  constructor(public payload: string[]) { }
}

export class AddComplete implements Action {
  readonly type  = VIDEOS_ADD_COMPLETE;

  constructor(public payload: Video) {}
}

export class MoveUp implements Action {
  readonly type  = VIDEOS_MOVE_UP;

  constructor(public payload: Video) {}
}

export class MoveDown implements Action {
  readonly type  = VIDEOS_MOVE_DOWN;

  constructor(public payload: Video) {}
}

export class Remove implements Action {
  readonly type  = VIDEOS_REMOVE;

  constructor(public payload: Video) {}
}

export type Actions = Add | AddComplete | MoveUp | MoveDown | Remove;

import { Video } from '../../models/video';
import * as videos from './videos.actions';

export interface State {
  videos: Video[];
}

export const defaultState: State = {
  videos: [],
};

export function reducer(state = defaultState, action: videos.Actions): State {
  switch (action.type) {
    case videos.VIDEOS_ADD_COMPLETE: {
      return {
        videos: [...state.videos, action.payload]
      };
    }
    case videos.VIDEOS_MOVE_UP: {
      const toMoveIndex = state.videos.indexOf(action.payload);
      if (toMoveIndex < 1) {
        return state;
      }

      state.videos.splice(toMoveIndex, 1);
      state.videos.splice(toMoveIndex - 1, 0, action.payload);

      return {
        videos: [...state.videos]
      };
    }
    case videos.VIDEOS_MOVE_DOWN: {
      const toMoveIndex = state.videos.indexOf(action.payload);
      if (toMoveIndex === -1 || toMoveIndex === state.videos.length) {
        return state;
      }

      state.videos.splice(toMoveIndex, 1);
      state.videos.splice(toMoveIndex + 1, 0, action.payload);

      return {
        videos: [...state.videos]
      };
    }
    case videos.VIDEOS_REMOVE: {
      const toMoveIndex = state.videos.indexOf(action.payload);
      state.videos.splice(toMoveIndex, 1);

      return {
        videos: [...state.videos]
      };
    }
    default: {
      return state;
    }
  }
}

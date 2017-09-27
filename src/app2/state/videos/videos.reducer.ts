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
    // case search.SEARCH_UPDATE: {
    //   const queries = action.payload.split(/\s+/).map((query) => query.trim());
    //   const reg = /^[A-Za-z0-9]{2,}$/;

    //   return {
    //     ...state,
    //     query: action.payload,
    //     valid: queries.every((query) => reg.test(query)),
    //   };
    // }
    case videos.VIDEOS_COMPLETE: {
      return {
        ...state,
        videos: [...state.videos, action.payload]
      };
    }
    default: {
      return state;
    }
  }
}

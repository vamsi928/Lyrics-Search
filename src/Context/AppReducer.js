import { actionTypes } from "./ActionTypes";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TOP10DATA:
      return {
        ...state,
        track_list: action.payload,
      };
    case actionTypes.SEARCH_DATA:
      return {
        ...state,
        track_list: action.payload.tracks,
        heading: action.payload.heading,
      };
    default:
      return state;
  }
};

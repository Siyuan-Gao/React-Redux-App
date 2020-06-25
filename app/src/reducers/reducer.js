import {
  FETCH_MUSIC_START,
  FETCH_MUSIC_SUCCESS,
  FETCH_MUSIC_FAIL,
} from "../actions/action";

const initialState = {
  music: [],
  error: "",
  isFetching: false,
};

export const rootReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_MUSIC_START:
      return {
        ...state,
        isFetching: true,
        music: [],
      };
    case FETCH_MUSIC_SUCCESS:
      return {
        ...state,
        music: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_MUSIC_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

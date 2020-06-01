import {
  REMOVE_MOVIE,
  ADD_MOVIE
  // INITIAL_DATA_REQUEST,
  // INITIAL_DATA_SUCCESS,
  // INITIAL_DATA_FAILURE
} from "./types";

const action = type => payload => ({
  type,
  payload
});

export const removeMovie = action(REMOVE_MOVIE);
export const addMovie = action(ADD_MOVIE);
// export const initialDataRequest = action(INITIAL_DATA_REQUEST);
// export const initialDataSuccess = action(INITIAL_DATA_SUCCESS);
// export const initialDataFailure = action(INITIAL_DATA_FAILURE);

import {
  REMOVE_MOVIE,
  ADD_MOVIE,
  FETCH_DATA,
} from "./types";

const action = type => payload => ({
  type,
  payload
});

export const removeMovie = action(REMOVE_MOVIE);
export const addMovie = action(ADD_MOVIE);
export const fetchData = action(FETCH_DATA);

export const getData = () => dispatch =>
  fetch("/data.json")
    .then(response => response.json())
    .then(response => {
      console.log(response);
      dispatch(fetchData(response));
    });
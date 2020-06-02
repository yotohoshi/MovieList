import {
  REMOVE_MOVIE,
  ADD_MOVIE,
  FETCH_DATA,
} from "../types";

const initialState = {
  myList: [],
  recommendations: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        myList: action.payload.mylist,
        recommendations: action.payload.recommendations
      };
    case REMOVE_MOVIE:
      return {
        myList: state.myList.filter(item => item.id !== action.payload),
        recommendations: [
          ...state.recommendations,
          state.myList.filter(item => item.id === action.payload)[0]
        ]
      };
    case ADD_MOVIE:
      return {
        myList: [
          ...state.myList,
          state.recommendations.filter(item => item.id === action.payload)[0]
        ],
        recommendations: state.recommendations.filter(
          item => item.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export default reducer;

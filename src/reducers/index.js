import {
  REMOVE_MOVIE,
  ADD_MOVIE
  // INITIAL_DATA_REQUEST,
  // INITIAL_DATA_SUCCESS,
  // INITIAL_DATA_FAILURE
} from "../types";
import data from "../data.json";

const initialState = {
  myList: data.mylist,
  recommendations: data.recommendations
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case INITIAL_DATA_REQUEST:
    // case INITIAL_DATA_SUCCESS:
    //   return {
    //     mylist: action.payload.mylist,
    //     recommendations: action.payload.recommendations
    //   };
    // case INITIAL_DATA_FAILURE:
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

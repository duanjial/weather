import { WEATHER_ERROR } from "../actions/types";

const initialState = {
  load_error: false,
  msg: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case WEATHER_ERROR:
      return {
        ...state,
        load_error: true,
        msg: action.payload
      };
    default:
      return state;
  }
}

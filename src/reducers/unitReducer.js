import { CHANGE_UNIT } from "../actions/types";

const initialState = {
  metric: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_UNIT:
      return {
        ...state,
        metric: !state.metric
      };
    default:
      return state;
  }
}

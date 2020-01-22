import { CHANGE_UNIT } from "./types";

export const changeUnit = () => dispatch => {
  dispatch({ type: CHANGE_UNIT });
};

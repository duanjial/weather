import { WEATHER_ERROR } from "./types";

export const getErrorMessage = msg => {
  return {
    type: WEATHER_ERROR,
    payload: msg
  };
};

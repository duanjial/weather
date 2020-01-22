import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import errorReducer from "./errorReducer";
import unitReducer from "./unitReducer";

export default combineReducers({
  weather: weatherReducer,
  error: errorReducer,
  unit: unitReducer
});

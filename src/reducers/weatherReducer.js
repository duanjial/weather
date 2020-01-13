import {GET_WEATHER, WEATHER_LOADING} from "../actions/types";

const initialState = {
    isLoading: false,
    location: ""
}

export default function(state=initialState, action) {
    switch(action.type) {
        case WEATHER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case GET_WEATHER:
            return state;
        default: return state;
    }
}
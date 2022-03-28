import {combineReducers} from "redux";
import {reducer as reduxReducer} from "./redux/reducer";

const reducer = combineReducers({
    redux:  reduxReducer,
});

export {reducer};
import { combineReducers } from "redux";
import movieReducer from "./movies";
import pageReducer from "./page";

const allReducers = combineReducers({
    movies: movieReducer,
    page: pageReducer
});

export default allReducers
import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import counterReducer from "./reducers/counterReducer";
import movieReducer from "./reducers/movieReducer";

const rootReducer = combineReducers(
    {
        user: userReducer,
        count: counterReducer,
        movie: movieReducer
    }
)

export default rootReducer;
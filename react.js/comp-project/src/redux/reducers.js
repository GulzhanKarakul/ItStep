import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import counterReducer from "./reducers/counterReducer";
import movieReducer from "./reducers/movieReducer";
import computerReducer from "./reducers/computerReducer";

const rootReducer = combineReducers(
    {
        user: userReducer,
        count: counterReducer,
        movie: movieReducer,
        computer: computerReducer
    }
)

export default rootReducer;
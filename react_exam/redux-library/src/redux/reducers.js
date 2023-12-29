import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import bookReducer from "./reducers/bookReducer";

const rootReducer = combineReducers(
    {
        user: userReducer,
        book: bookReducer,
    }
)

export default rootReducer;
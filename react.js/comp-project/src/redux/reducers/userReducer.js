const userReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "SET_USER":
            let lastState = { ...state, data: action.data };
            console.log(lastState);
            return lastState;
        default: return state;
    }
}

export default userReducer;
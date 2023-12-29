const usersReducer = (state = {users: [],}, action) => {
    switch (action.type) {
        case "ADD_USERS":
            let result = action.usersData;
            console.log(action.usersData)
            console.log(state)
            return {...state, users: result};
        default: return state;
    }
}

export default usersReducer;
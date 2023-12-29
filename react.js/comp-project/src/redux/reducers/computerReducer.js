const computerReducer = (state = { name: 'ComputerOne', ip: '111.222.333', turn_on: false }, action) => {
    switch (action.type) {
        case "TOGGLE_SWITCH": return { name: state.name, ip: state.ip, turn_on: !state.turn_on};
        case "SET_NAME":
            let lastState = { ...state, name: action.nameData };
            console.log(lastState);
            return lastState;
        case "SET_IP":
            let ipState = { ...state, ip: action.ipData };
            console.log(ipState);
            return ipState;
        default: return state;
    }
}

export default computerReducer;
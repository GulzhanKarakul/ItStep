export const sources = {
    COUNTER: {
        INCREMENT: "INCREMENT",
        DECREMENT: "DECREMENT",
        CLEAR: "CLEAR",
    },
    LIST: {
        ADD: "ADD",
        UP: 'UP',
        DOWN: 'DOWN',
        REMOVE: "REMOVE",
    },
}

export function increment() {
    return {
        source: sources.COUNTER.INCREMENT 
    };
}

export function decrement() {
    return {
        source: sources.COUNTER.DECREMENT 
    };
}

export function clear() {
    return {
        source: sources.COUNTER.CLEAR 
    };
}

export function add(inputValue) {
    return {
        source: sources.LIST.ADD,
        text: inputValue,
    };
}

export function up(listValue) {
    return {
        source: sources.LIST.UP,
        text: listValue,
    };
}

export function down(listValue) {
    return {
        source: sources.LIST.DOWN,
        text: listValue,
    };
}

export function remove(listValue) {
    return {
        source: sources.LIST.REMOVE,
        text: listValue,
    };
}
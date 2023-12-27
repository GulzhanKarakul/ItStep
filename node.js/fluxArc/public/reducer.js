import { sources } from "./actions.js";

const counterInitialState = {count:0};

export function countReducer (state = counterInitialState, action){
    if(!action) return state;
    switch (action.source) {
        case sources.COUNTER.INCREMENT :
            return{count: state.count+1};
        case sources.COUNTER.DECREMENT:
            return{count: state.count-1};
        case sources.COUNTER.CLEAR:
            return{count: 0};
        default:
            return state;
    }
}



const listInitialState = { ul: ['item #1', 'item #2'] };

export function listReducer(state = listInitialState, action) {
    if (!action) return state;
    switch (action.source) {
        case sources.LIST.ADD:
            state.ul.push(action.text);
            return state;
        case sources.LIST.UP:
            let index = state.ul.indexOf(action.text);
            if(index > 0) {
                state.ul[index] = state.ul[index-1];
                state.ul[index-1] = action.text;
            } else if(index == 0) {
                state.ul.shift();
                state.ul.push(action.text);
            }
            return state;
        case sources.LIST.DOWN:
            let index2 = state.ul.indexOf(action.text);
            if(index2 >= 0 && index2 < (state.ul.length - 1)) {
                state.ul[index2] = state.ul[index2+1];
                state.ul[index2+1] = action.text;
            } else  {
                state.ul.pop();
                state.ul.unshift(action.text);
            }
            return state;
        case sources.LIST.REMOVE:
            state.ul = state.ul.reduce((acc, element)=>{
                if (element !== action.text ) {
                    acc.push(element);
                }
                return acc;
            }, []);
            return state;
        default:
            return state;
    }
}
import { countStore, listStore } from "./store.js";
import { sources } from "./actions.js";

export const dispatcher = {
    dispatch (action) {
        switch(action.source) {
            case sources.COUNTER.INCREMENT:
            case sources.COUNTER.DECREMENT:
            case sources.COUNTER.CLEAR:
                countStore.dispatch(action);
                break;
        
            case sources.LIST.ADD:
            case sources.LIST.UP:
            case sources.LIST.DOWN:
            case sources.LIST.REMOVE:
                listStore.dispatch(action);
                break;
        }
    }
}
import * as reducer from './reducer.js';

function createStore(reducer){
    let state = reducer();
    let listeners =[];

    function dispatch(action){
        state = reducer(state,action);
        notifyListeners();
    }

    function notifyListeners(){
        listeners.forEach((listener)=>{
            listener();
        })
    }

    function subscribe(listener){
        listeners.push(listener);
    }

    function getState(){
        return state;
    };

    return{
        getState,
        dispatch,
        subscribe,
    }
}

export const countStore = createStore(reducer.countReducer);
export const listStore = createStore(reducer.listReducer);

/* VN: Самым лучшим выходом будет создание разных store для разных источников событий:
export const countStore = createStore(reducer.countReducer);
export const listStore = createStore(reducer.listReducer);

У одного store должен быть только один редуктор. Store не должен ничего выбирать.
А выбирать должен dispatcher! В зависимости от источника события - направлять событие на обработку 
одному из известных ему store. В данном случае - countStore или listStore.
Код диспетчера в dispatcher.js при этом будет выглядеть так:

export const dispatcher = {
    dispatch (action) {
        switch(action.source) {
            case(actions.source.COUNTER): countStore.dispatch(action);
            break;

            case(actions.source.LIST): listStore.dispatch(action);
            break;

            // и тд, источники могут быть разными, и для них могут быть разные экземпляры store, каждый со своим редуктором
        }
    }
}

Разумеется, все action должны обзавестись полем source.

*/

import { createStore } from 'redux';
import { countReducer } from './redusers';

const store = createStore(countReducer);

export default store;
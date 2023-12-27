// Виталий, по идее сделать два стора я подумала что проще простого, а вот закинуть в один стор несколько редукторов покруче
// Подумала я и сделала так(( Оказалось зря...
// Прикол в том что я увидела такую реализацию в реакте...
// Типа один стор и несколько редукторов в него...

import * as actions from './actions.js';
import {dispatcher} from './dispatcher.js';
import { CountView, ListView } from './view.js';
import { countStore, listStore } from "./store.js";

const incrementButton = document.getElementById("incr");
const decrementButton = document.getElementById("decr");
const clearButton = document.getElementById('clear');

incrementButton.addEventListener("click",()=>{
    dispatcher.dispatch(actions.increment());
});

decrementButton.addEventListener("click",()=>{
    dispatcher.dispatch(actions.decrement());
});

clearButton.addEventListener("click",()=>{
    dispatcher.dispatch(actions.clear());
});

let countView = new CountView(countStore);
let listView = new ListView(listStore);

let addItemBtn = document.getElementById('add');
addItemBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let newListItem = document.getElementById('new-item-text');
    const text = newListItem.value.trim();

    if (text !== '') dispatcher.dispatch(actions.add(text));
    newListItem.value = '';
});
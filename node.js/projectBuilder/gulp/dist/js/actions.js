const types={INCREMENT:"INCREMENT",DECREMENT:"DECREMENT",CLEAR:"CLEAR"};function increment(){return{type:types.INCREMENT}}function decrement(){return{type:types.DECREMENT}}function clear(){return{type:types.CLEAR}}const typesForList={ADD:"ADD"};function add(){return{type:types.ADD}}export{types,increment,decrement,clear,typesForList,add};
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import SearchScreen from './components/SearchScreen';


function App() {
    return (
        <Provider store={store}>
            <SearchScreen />
        </Provider>
    );
}

export default App;

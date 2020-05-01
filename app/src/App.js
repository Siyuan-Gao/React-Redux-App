import React from 'react';
import logo from './logo.svg';
import './App.css';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer as reducer} from './reducers/reducer';
import { Provider } from 'react-redux';
import CatList from './components/CatList';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CatList />
      </div>
    </Provider>
  );
}

export default App;

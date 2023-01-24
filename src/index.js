import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './components/App';
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';
// import  {configureStore} from '@reduxjs/toolkit';
import { createStore } from 'redux';
import './index.css';

//import { combineReducers } from 'redux';
import rootReducer  from './reducers';

// const reducer = combineReducers({
//   // here we will be adding reducers
// })
// const store = configureStore({
//   reducer,
// })

const store=createStore(rootReducer);
console.log('store',store);
// console.log('BEFORE_STATE',store.getState());
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// })
// console.log('AFTER_STATE',store.getState());
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(<App store={store}/>,document.getElementById('root'));

root.render(
  // <StrictMode>
    <App store={store}/>
  // </StrictMode>,
);

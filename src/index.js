import React, { createContext } from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './components/App';
import thunk from 'redux-thunk';
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';
// import  {configureStore} from '@reduxjs/toolkit';
import { createStore,applyMiddleware } from 'redux';
import './index.css';

//import { combineReducers } from 'redux';
import rootReducer  from './reducers';

// const reducer = combineReducers({
//   // here we will be adding reducers
// })
// const store = configureStore({
//   reducer,
// })


// console.log('BEFORE_STATE',store.getState());
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// })
// console.log('AFTER_STATE',store.getState());
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);


// const logger=function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       //middleware code
//       console.log('ACTION_TYPE = ',action.type);
//       next(action);
//     }
//   }

// }
const logger=({dispatch,getState})=>(next)=>(action)=>{
  console.log('ACTION_TYPE = ',action.type);
  next(action);
}
// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   if(typeof action=== 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }
const store=createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store',store);
export const StoreContext=createContext();
console.log('StoreContext',StoreContext);
class Provider extends React.Component{
  render(){
    const {store}=this.props;
  return( 
   <StoreContext.Provider value={store}>
{this.props.children}
    </StoreContext.Provider>
  );
}

}
 const root = ReactDOM.createRoot(document.getElementById('root'));
//  ReactDOM.render(
//   <Provider store={store}>
//  <App />
//  </Provider>,
//  document.getElementById('root'));


root.render(
  // <StrictMode>
    <Provider store={store}>
 <App />
</Provider>,
  // </StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// import { useReducer } from 'react';
 import {Provider} from 'react-redux'
// import {combineReducers, createStore} from 'redux'
 import { store } from './store/store'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <Provider store={store}>
   <App />
   </Provider>

);


reportWebVitals();
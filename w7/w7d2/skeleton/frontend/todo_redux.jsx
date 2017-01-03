import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('content');
  const newStore = applyMiddleWares(store, addLoggingToDispatch);

  ReactDOM.render(<Root store={newStore} />, root);
});

const addLoggingToDispatch = (store) => (next) => (action) => {
  const storeDispatch = store.dispatch;
  console.log(store.getState());
  console.log(action);
  let returnValue = storeDispatch(action);
  console.log(store.getState());
  return returnValue;
};

const applyMiddleWares = (store, ...middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
};

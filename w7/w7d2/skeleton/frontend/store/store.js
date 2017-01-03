import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(addLoggingToDispatch)
  );
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

const addLoggingToDispatch = (store) => (next) => (action) => {
  const storeDispatch = store.dispatch;
  console.log(store.getState());
  console.log(action);
  let returnValue = storeDispatch(action);
  console.log(store.getState());
  return returnValue;
};

export default configureStore;

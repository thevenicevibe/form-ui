// store.js
import { applyMiddleware, createStore } from 'redux';
// import thunk, { withExtraArgument } from 'redux-thunk';
import rootReducer from './reducers/index';

// const extraArgument = { /* your extra argument */ };

const store = createStore(
  rootReducer,
  applyMiddleware()
); 

export default store;
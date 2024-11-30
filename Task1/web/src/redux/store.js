// src/redux/store.js

import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

// Create Redux store without thunk or devtools
const store = createStore(
  reducer, 
  applyMiddleware() // No middleware
);

export default store;

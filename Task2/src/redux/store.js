import { createStore } from 'redux';
import { calculatorReducer } from './reducer';

export const store = createStore(calculatorReducer);

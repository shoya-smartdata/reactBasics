export const SET_INPUT = 'SET_INPUT';
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const CALCULATE = 'CALCULATE';
export const ADD_DIGIT = 'ADD_DIGIT';
export const SET_OPERATION = 'SET_OPERATION';

export const setInput = (value) => ({
  type: SET_INPUT,
  payload: value,
});

export const clearInput = () => ({
  type: CLEAR_INPUT,
});

export const calculate = () => ({
  type: CALCULATE,
});

export const addDigit = (digit) => ({
  type: ADD_DIGIT,
  payload: digit,
});

export const setOperation = (operation) => ({
  type: SET_OPERATION,
  payload: operation,
});

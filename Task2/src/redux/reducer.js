import {
    SET_INPUT,
    CLEAR_INPUT,
    CALCULATE,
    ADD_DIGIT,
    SET_OPERATION,
  } from './action';
  
  const initialState = {
    input: '',
    previousValue: null,
    currentValue: '',
    operation: null,
    display: '', // New: To show the complete expression
    result: 0,
  };
  
  export const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_DIGIT:
        return {
          ...state,
          currentValue: `${state.currentValue || ''}${action.payload}`,
          display: state.operation
            ? `${state.previousValue} ${state.operation} ${state.currentValue}${action.payload}`
            : `${state.currentValue}${action.payload}`,
        };
  
      case CLEAR_INPUT:
        return { ...initialState };
  
      case SET_OPERATION:
        return {
          ...state,
          previousValue: state.currentValue,
          currentValue: '',
          operation: action.payload,
          display: `${state.currentValue} ${action.payload}`,
        };
  
      case CALCULATE:
        const prev = parseFloat(state.previousValue);
        const current = parseFloat(state.currentValue);
  
        if (!prev || !current) return state;
  
        let result = 0;
  
        switch (state.operation) {
          case '+':
            result = prev + current;
            break;
          case '-':
            result = prev - current;
            break;
          case '*':
            result = prev * current;
            break;
          case '/':
            result = prev / current;
            break;
          default:
            return state;
        }
  
        return {
          ...state,
          result,
          previousValue: null,
          currentValue: result.toString(),
          operation: null,
          display: `${state.display} = ${result}`,
        };
  
      default:
        return state;
    }
  };
  
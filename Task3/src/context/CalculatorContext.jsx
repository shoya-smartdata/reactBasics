import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [display, setDisplay] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  const addDigit = (digit) => {
    if (result !== null) {
      clearAll(); // Start fresh after a result
    }
    setCurrentValue((prev) => prev + digit);
    setDisplay((prev) => prev + digit);
  };

  const chooseOperation = (op) => {
    if (currentValue === '') return;
    if (operation) calculate();

    setOperation(op);
    setPreviousValue(currentValue);
    setCurrentValue('');
    setDisplay(`${currentValue} ${op} `);
  };

  const calculate = () => {
    if (!previousValue || !currentValue) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    let result;
    switch (operation) {
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
        return;
    }

    setResult(result);
    setDisplay(`${previousValue} ${operation} ${currentValue} = ${result}`);
    setCurrentValue(result.toString());
    setPreviousValue(null);
    setOperation(null);
  };

  const clearAll = () => {
    setDisplay('');
    setCurrentValue('');
    setPreviousValue(null);
    setOperation(null);
    setResult(null);
  };

  return (
    <CalculatorContext.Provider
      value={{
        display,
        addDigit,
        chooseOperation,
        calculate,
        clearAll,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

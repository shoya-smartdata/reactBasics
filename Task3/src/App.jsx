import React from 'react';
import Calculator from './calculator/Calculator';
import { CalculatorProvider } from './context/CalculatorContext';

const App = () => {
  return (
    <CalculatorProvider>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <Calculator />
      </div>
    </CalculatorProvider>
  );
};

export default App;

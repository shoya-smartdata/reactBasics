import React, { Component } from 'react';
import Calculator from './calculator/Calculator';
import { CalculatorProvider } from './context/CalculatorContext';

class App extends Component {
  render() {
    return (
      <CalculatorProvider>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <Calculator />
        </div>
      </CalculatorProvider>
    );
  }
}

export default App;

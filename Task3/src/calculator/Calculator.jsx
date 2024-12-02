import React, { Component } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

class Calculator extends Component {
  static contextType = CalculatorContext;

  render() {
    const { display, addDigit, chooseOperation, calculate, clearAll } = this.context;

    return (
      <div className="w-80 h-auto mx-auto bg-gray-200 p-6 rounded-3xl shadow-inner flex flex-col justify-center items-center">
        <div className="w-full mb-5">
          <input
            type="text"
            value={display || '0'}
            readOnly
            className="w-full h-16 text-right text-4xl font-mono bg-gray-200 border-none rounded-2xl shadow-lg p-4 focus:outline-none text-gray-800"
          />
        </div>
        <div className="grid grid-cols-4 gap-3 w-full">
          <button
            className="col-span-2 bg-red-300 text-gray-700 py-3 rounded-full shadow-lg active:shadow-inner text-lg font-semibold hover:bg-red-400 transition-all"
            onClick={clearAll}
          >
            C
          </button>
          <button
            className="bg-blue-300 text-gray-700 py-3 rounded-full shadow-lg active:shadow-inner text-lg font-semibold hover:bg-blue-400 transition-all"
            onClick={() => chooseOperation('/')}
          >
            ÷
          </button>
          <button
            className="bg-blue-300 text-gray-700 py-3 rounded-full shadow-lg active:shadow-inner text-lg font-semibold hover:bg-blue-400 transition-all"
            onClick={() => chooseOperation('*')}
          >
            ×
          </button>
          {[7, 8, 9].map((num) => (
            <button
              key={num}
              className="bg-white text-gray-800 py-3 rounded-full shadow-lg active:shadow-inner text-lg font-semibold hover:bg-gray-100 transition-all"
              onClick={() => addDigit(num.toString())}
            >
              {num}
            </button>
          ))}
          <button
            className="bg-blue-300 text-gray-700 py-3 rounded-full shadow-lg active:shadow-inner text-lg font-semibold hover:bg-blue-400 transition-all"
            onClick={() => chooseOperation('-')}
          >
            -
          </button>
          {[4, 5, 6].map((num) => (
            <button
              key={num}
              className="bg-white text-gray-800 py-3 rounded-full shadow-lg active:shadow-inner text-lg font-semibold hover:bg-gray-100 transition-all"
              onClick={() => addDigit(num.toString())}
            >
              {num}
            </button>
          ))}
          <button
            className="bg-blue-300 text-gray-700 py-3 rounded-full shadow-lg active:shadow-inner text-lg font-semibold hover:bg-blue-400 transition-all"
            onClick={() => chooseOperation('+')}
          >
            +
          </button>
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className="bg-white text-gray-800 py-3 rounded-full shadow-lg active:shadow-inner text-lg font-semibold hover:bg-gray-100 transition-all"
              onClick={() => addDigit(num.toString())}
            >
              {num}
            </button>
          ))}
          <button
            className="col-span-2 bg-white text-gray-800 py-3 rounded-full shadow-lg active:shadow-inner text-lg font-semibold hover:bg-gray-100 transition-all"
            onClick={() => addDigit('0')}
          >
            0
          </button>
          <button
            className="bg-white text-gray-800 py-3 rounded-full shadow-lg active:shadow-inner text-lg font-semibold hover:bg-gray-100 transition-all"
            onClick={() => addDigit('.')}
          >
            .
          </button>
          <button
            className="bg-green-300 text-gray-700 py-3 rounded-full shadow-lg active:shadow-inner text-lg font-bold hover:bg-green-400 transition-all"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;

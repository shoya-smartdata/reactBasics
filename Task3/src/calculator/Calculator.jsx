import React, { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

const Calculator = () => {
  const { display, addDigit, chooseOperation, calculate, clearAll } =
    useContext(CalculatorContext);

  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-blue-50 to-gray-100 p-8 rounded-3xl shadow-xl mt-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        💡 Stylish Calculator
      </h1>
      <div className="mb-6">
        <input
          type="text"
          value={display || '0'}
          readOnly
          className="w-full p-4 border border-gray-300 rounded-xl text-right text-3xl font-mono bg-gray-50 shadow-sm focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        <button
          className="col-span-2 bg-red-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-red-600 shadow-md transition-all"
          onClick={clearAll}
        >
          C
        </button>
        <button
          className="bg-purple-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-purple-600 shadow-md transition-all"
          onClick={() => chooseOperation('/')}
        >
          ÷
        </button>
        <button
          className="bg-purple-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-purple-600 shadow-md transition-all"
          onClick={() => chooseOperation('*')}
        >
          ×
        </button>
        {[7, 8, 9].map((num) => (
          <button
            key={num}
            className="bg-gradient-to-r from-green-400 to-blue-400 text-white py-3 rounded-lg text-lg font-semibold hover:scale-105 transform transition-all shadow-lg"
            onClick={() => addDigit(num.toString())}
          >
            {num}
          </button>
        ))}
        <button
          className="bg-purple-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-purple-600 shadow-md transition-all"
          onClick={() => chooseOperation('-')}
        >
          -
        </button>
        {[4, 5, 6].map((num) => (
          <button
            key={num}
            className="bg-gradient-to-r from-green-400 to-blue-400 text-white py-3 rounded-lg text-lg font-semibold hover:scale-105 transform transition-all shadow-lg"
            onClick={() => addDigit(num.toString())}
          >
            {num}
          </button>
        ))}
        <button
          className="bg-purple-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-purple-600 shadow-md transition-all"
          onClick={() => chooseOperation('+')}
        >
          +
        </button>
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className="bg-gradient-to-r from-green-400 to-blue-400 text-white py-3 rounded-lg text-lg font-semibold hover:scale-105 transform transition-all shadow-lg"
            onClick={() => addDigit(num.toString())}
          >
            {num}
          </button>
        ))}
        <button
          className="col-span-2 bg-gradient-to-r from-green-400 to-blue-400 text-white py-3 rounded-lg text-lg font-semibold hover:scale-105 transform transition-all shadow-lg"
          onClick={() => addDigit('0')}
        >
          0
        </button>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-400 text-white py-3 rounded-lg text-lg font-semibold hover:scale-105 transform transition-all shadow-lg"
          onClick={() => addDigit('.')}
        >
          .
        </button>
        <button
          className="bg-blue-500 text-white py-3 rounded-xl text-lg font-bold hover:bg-blue-600 shadow-md transition-all"
          onClick={calculate}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;

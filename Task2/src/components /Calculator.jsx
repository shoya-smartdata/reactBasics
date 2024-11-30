import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addDigit,
  clearInput,
  calculate,
  setOperation,
} from '../redux/action';

class Calculator extends Component {
  handleDigit = (digit) => {
    this.props.addDigit(digit);
  };

  handleOperation = (operation) => {
    this.props.setOperation(operation);
  };

  render() {
    const { currentValue, display, clearInput, calculate } = this.props;

    return (
      <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Redux Calculator
        </h1>
        <div className="mb-4">
          <input
            type="text"
            value={display || currentValue || ''}
            readOnly
            className="w-full p-3 border rounded-md text-right text-2xl font-mono bg-gray-50"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button
            className="col-span-2 bg-red-500 text-white py-2 text-xl rounded-md hover:bg-red-600"
            onClick={clearInput}
          >
            C
          </button>
          <button
            className="bg-gray-300 text-xl py-2 rounded-md hover:bg-gray-400"
            onClick={() => this.handleOperation('/')}
          >
            ÷
          </button>
          <button
            className="bg-gray-300 text-xl py-2 rounded-md hover:bg-gray-400"
            onClick={() => this.handleOperation('*')}
          >
            ×
          </button>
          {[7, 8, 9].map((num) => (
            <button
              key={num}
              className="bg-gray-200 text-xl py-2 rounded-md hover:bg-gray-300"
              onClick={() => this.handleDigit(num.toString())}
            >
              {num}
            </button>
          ))}
          <button
            className="bg-gray-300 text-xl py-2 rounded-md hover:bg-gray-400"
            onClick={() => this.handleOperation('-')}
          >
            -
          </button>
          {[4, 5, 6].map((num) => (
            <button
              key={num}
              className="bg-gray-200 text-xl py-2 rounded-md hover:bg-gray-300"
              onClick={() => this.handleDigit(num.toString())}
            >
              {num}
            </button>
          ))}
          <button
            className="bg-gray-300 text-xl py-2 rounded-md hover:bg-gray-400"
            onClick={() => this.handleOperation('+')}
          >
            +
          </button>
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className="bg-gray-200 text-xl py-2 rounded-md hover:bg-gray-300"
              onClick={() => this.handleDigit(num.toString())}
            >
              {num}
            </button>
          ))}
          <button
            className="col-span-2 bg-gray-200 text-xl py-2 rounded-md hover:bg-gray-300"
            onClick={() => this.handleDigit('0')}
          >
            0
          </button>
          <button
            className="bg-gray-200 text-xl py-2 rounded-md hover:bg-gray-300"
            onClick={() => this.handleDigit('.')}
          >
            .
          </button>
          <button
            className="bg-blue-500 text-white text-xl py-2 rounded-md hover:bg-blue-600"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentValue: state.currentValue,
  display: state.display,
});

const mapDispatchToProps = {
  addDigit,
  clearInput,
  calculate,
  setOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

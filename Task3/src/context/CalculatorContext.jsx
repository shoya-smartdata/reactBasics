import React, { createContext, Component } from 'react';

export const CalculatorContext = createContext();

export class CalculatorProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      currentValue: '',
      previousValue: null,
      operation: null,
      result: null,
    };
  }

  addDigit = (digit) => {
    if (this.state.result !== null) {
      this.clearAll();
    }
    this.setState((prevState) => ({
      currentValue: prevState.currentValue + digit,
      display: prevState.currentValue + digit,
    }));
  };

  chooseOperation = (op) => {
    if (this.state.currentValue === '') return;
    if (this.state.operation) {
      this.calculate();
    }
    this.setState((prevState) => ({
      operation: op,
      previousValue: prevState.currentValue,
      currentValue: '',
      display: '', // Clear display for next input
    }));
  };

  calculate = () => {
    const { previousValue, currentValue, operation } = this.state;

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

    this.setState({
      result: result,
      display: result.toString(), // Update display with only the result
      currentValue: result.toString(),
      previousValue: null,
      operation: null,
    });
  };

  clearAll = () => {
    this.setState({
      display: '',
      currentValue: '',
      previousValue: null,
      operation: null,
      result: null,
    });
  };

  render() {
    return (
      <CalculatorContext.Provider
        value={{
          display: this.state.display,
          addDigit: this.addDigit,
          chooseOperation: this.chooseOperation,
          calculate: this.calculate,
          clearAll: this.clearAll,
        }}
      >
        {this.props.children}
      </CalculatorContext.Provider>
    );
  }
}

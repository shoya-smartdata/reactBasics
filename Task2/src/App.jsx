import React, { Component } from 'react';
import Calculator from './components /Calculator';

class App extends Component {
  render() {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <Calculator />
      </div>
    );
  }
}

export default App;

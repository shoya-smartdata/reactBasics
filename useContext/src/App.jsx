import React from "react";
import { CalculatorProvider } from "./context/Calculatorcontext";
import Calculator from "./components/Calculator";

const App = () => {
    return (
        <CalculatorProvider>
            <Calculator />
        </CalculatorProvider>
    );
};

export default App;

import React, { useContext } from "react";
import { CalculatorContext } from "../context/Calculatorcontext";
import "./Calculator.css"; // Import the CSS file

const Calculator = () => {
    const { displayValue, handleButtonClick } = useContext(CalculatorContext);

    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "C", "0", "=", "+"
    ];

    return (
        <div className="calculator">
            <div className="display">{displayValue || "0"}</div>
            <div className="buttons">
                {buttons.map((button) => (
                    <button
                        key={button}
                        onClick={() => handleButtonClick(button)}
                        className="button"
                    >
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;

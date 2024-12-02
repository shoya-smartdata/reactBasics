import React, { createContext, useContext, useState } from "react";

// Create Context
export const CalculatorContext = createContext();

// Provider Component
export const CalculatorProvider = ({ children }) => {
    const [displayValue, setDisplayValue] = useState("");

    // Function to handle button clicks
    const handleButtonClick = (value) => {
        if (value === "C") {
            setDisplayValue(""); // Clear display
        } else if (value === "=") {
            try {
                setDisplayValue(eval(displayValue).toString()); // Evaluate the expression
            } catch (error) {
                setDisplayValue("Error");
            }
        } else {
            setDisplayValue((prev) => prev + value); // Append clicked button value
        }
    };

    return (
        <CalculatorContext.Provider value={{ displayValue, handleButtonClick }}>
            {children}
        </CalculatorContext.Provider>
    );
};

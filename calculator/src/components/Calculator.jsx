import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appendNumber, clearDisplay, calculateResult } from '../redux/action';

const Calculator = () => {
    const dispatch = useDispatch();
    const display = useSelector((state) => state.display);

    const handleNumberClick = (number) => {
        dispatch(appendNumber(number));
    };

    const handleClear = () => {
        dispatch(clearDisplay());
    };

    const handleCalculate = () => {
        dispatch(calculateResult());
    };

    return (
        <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                    <button key={num} onClick={() => handleNumberClick(num.toString())}>
                        {num}
                    </button>
                ))}
                <button className="clear" onClick={handleClear}>C</button>
<button className="equals" onClick={handleCalculate}>=</button>

                <button onClick={() => handleNumberClick('+')}>+</button>
                <button onClick={() => handleNumberClick('-')}>-</button>
                <button onClick={() => handleNumberClick('*')}>*</button>
                <button onClick={() => handleNumberClick('/')}>/</button>
             

            </div>
        </div>
    );
};

export default Calculator;

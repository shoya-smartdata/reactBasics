export const appendNumber = (number) => ({
    type: 'add',
    payload: number,
});

export const clearDisplay = () => ({
    type: 'clear',
});

export const calculateResult = () => ({
    type: 'calculateResults',
});

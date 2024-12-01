const initialState = {
    display: "0" // Initialize as a string for easier concatenation
};

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                display: state.display === "0" ? action.payload : state.display + action.payload
            };
        case "clear":
            return {
                ...state,
                display: "0"
            };
        case "calculateResults":
            try {
                return {
                    ...state,
                    display: eval(state.display).toString() // Use cautiously, or replace eval with a safer method
                };
            } catch {
                return {
                    ...state,
                    display: "Error"
                };
            }
        default:
            return state;
    }
};

export default calculatorReducer;

import React, { useReducer } from 'react';
import './Day10_CSS.css';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'Increment':
            return { count: state.count + 1};
        case 'Decrement':
            return { count: state.count - 1};
        case 'Reset':
            return { count: 0};
        case "Increment_By_Amount":
            return { count: state.count + action.payload};
        default:
            return state;
    }
}

export default function Day10_UseReducerDemo() {

    const [state, dispatch] = useReducer(counterReducer, { count: 0});

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4"> Counter with useReducer</h2>
            <p className="text-xl mb-6">Count: {state.count}</p>

            <div className="flex justify-center gap-4">
                <button onClick={() => dispatch({ type : "Increment"})} className="btn">
                    +
                </button>
                <button onClick={() => dispatch({ type: "Decrement"})} className="btn">
                    -
                </button>
                <button onClick={() => dispatch({ type: "Reset"})} className="btn">
                    Reset
                </button>
                <button onClick={() => dispatch({ type: "Increment_By_Amount", payload: 5})} className="btn">
                    +5
                </button>
            </div>
        </div>
    )

}
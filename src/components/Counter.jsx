import React, { useReducer } from "react";

const initialState = { count: 0 }; 

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      if (state.count > 0) {
        return { count: state.count - 1 };
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-container">
      <h2 className="counter-count">Count: {state.count}</h2>
      <button
        className="counter-button"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <button
        className="counter-button"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
    </div>
  );
}

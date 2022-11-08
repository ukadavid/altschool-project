import "../styles/Counter.css";
import { Link } from "react-router-dom";
import React, { useReducer } from "react";
import CounterHook from "../hooks/CounterHook";

function Counter() {
  function handleIncrement() {
    dispatch({ type: "increment", payload: state.count + 1 });
  }

  function handleDecrement() {
    dispatch({ type: "decrement", payload: state.count - 1 });
  }

  function handleReset() {
    dispatch({ type: "reset", payload: (state.count = 0) });
  }

  function handleSet() {
    dispatch({ type: "set", payload: parseInt(state.value) });
  }

  function handleInput(e) {
    dispatch({ type: "count", payload: e.target.value });
  }

  const [state, dispatch] = useReducer(CounterHook, { count: 0, value: 0 });

  return (
    <div className="counter">
      <div className="logo nav">
        <Link to="/">
          <p>Return to Homepage</p>
        </Link>
      </div>
      <div className="center">
        <div className="counter__card">
          <h1>{state.count}</h1>
          <div className="counter__btns">
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
          </div>
          <div className="reset__set">
            <button onClick={handleReset}>Reset</button>
          </div>
          <div className="input__set">
            <input type="number" value={state.value} onChange={handleInput} />
            <button onClick={handleSet}>Set</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;

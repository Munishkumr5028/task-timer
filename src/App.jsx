import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function App() {
  const inputRef = useRef(null);
  const [focusCount, setFocusCount] = useState(0);

  const handleFocus = () => {
    console.log("Input focused", inputRef.current);
    setFocusCount((prev) => prev + 1);
  };  

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="app-container">
      <h1 className="app-title">useReducer + useRef Example</h1>
      <input
        className="app-input"
        ref={inputRef}
        placeholder="Click button or focus me"
        onFocus={handleFocus}
      />
      <button className="app-button" onClick={focusInput}>
        Focus Input
      </button>
      <p>Input focus count (renders): {focusCount}</p>
      <Counter />
    </div>
  );
}

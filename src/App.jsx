import React, { useRef } from 'react';
import Counter from './components/Counter';
import './App.css';

export default function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="app-container">
      <h1 className="app-title">useReducer + useRef </h1>
      <input className="app-input" ref={inputRef} placeholder="Type something..." />
      <button className="app-button" onClick={focusInput}>Focus Input</button>
      <Counter />
    </div>
  );
}

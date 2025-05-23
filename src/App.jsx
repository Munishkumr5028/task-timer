import { useRef, useState, useEffect } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function App() {
  const inputRef = useRef("");

  const [focusCount, setFocusCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted - no re-render on typing with useRef");
  }, []);

  const handleFocus = () => {
    setFocusCount((prev) => prev + 1);
  };

  const handleChange = (e) => {
    inputRef.current = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value (useRef):", inputRef.current);
  };

  const focusInput = () => {
    document.querySelector(".app-input").focus();
    console.log("focusInput called: input focused");
  };

  return (
    <div className="app-container">
      <h1 className="app-title">useReducer + useRef</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="app-input"
          placeholder="Click button or focus me"
          onFocus={handleFocus}
          onChange={handleChange}
        />
        <button className="app-button" type="submit">
          Submit
        </button>
      </form>

      <button className="app-button" onClick={focusInput}>
        Focus Input
      </button>

      <p>Input focus count (renders): {focusCount}</p>

      <Counter />
    </div>
  );
}


// import { useRef, useState, useEffect } from "react";
// import Counter from "./components/Counter";
// import "./App.css";

// export default function App() {
//   const inputRef = useRef(""); 

//   const [inputValue, setInputValue] = useState("");

//   const [focusCount, setFocusCount] = useState(0);

//   useEffect(() => {
//     console.log("Component mounted");
//   }, []);

//   useEffect(() => {
//     console.log("Re-render due to inputValue state change:", inputValue);
//   }, [inputValue]);

//   const handleFocus = () => {
//     setFocusCount((prev) => prev + 1);
//   };

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted value (useState):", inputValue);
//   };

//   const focusInput = () => {
//     document.querySelector(".app-input").focus();
//     console.log("focusInput called: input focused");
//   };

//   return (
//     <div className="app-container">
//       <h1 className="app-title">useReducer + useRef</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           className="app-input"
//           placeholder="Click button or focus me"
//           onFocus={handleFocus}
//           onChange={handleChange}
//           value={inputValue} 
//         />
//         <button className="app-button" type="submit">
//           Submit
//         </button>
//       </form>

//       <button className="app-button" onClick={focusInput}>
//         Focus Input
//       </button>

//       <p>Input focus count (renders): {focusCount}</p>

//       <p>Live input value: {inputValue}</p>

//       <Counter />
//     </div>
//   );
// }

import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleClick = (diff) => {
    setCount(count + diff * step);
  };

  const arr = Array.from({ length: 10 }, (v, i) => i + 1);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => handleClick(1)}>+</button>
      <button onClick={() => handleClick(-1)}>-</button>
      <div>---{step}---</div>

      {arr.map((i) => (
        <button onClick={() => setStep(i)}>{i}</button>
      ))}
    </div>
  );
}

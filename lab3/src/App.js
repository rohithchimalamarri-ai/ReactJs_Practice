import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandler = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter App Count:{count}</h1>
      <Counter
        count={count}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        resetHandler={resetHandler}
      />
    </div>
  );
};

export default App;

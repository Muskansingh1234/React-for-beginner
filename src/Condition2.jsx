

// Using state variable:A state variable is a special variable in React that:
// Stores data inside a component
// Can change over time
//Causes the component to re-render when it changes

import { useState } from "react";

function Condition(){

const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );




}

export default Condition;
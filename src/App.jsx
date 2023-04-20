import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { Child1, Child2, Child3, Child4 } from "./Example";

export const appContext = createContext(null);

const App = () => {
  const [username, setUsername] =useState("Pedro");
  const [count, setCount] = useState(0);

  return (
    <appContext.Provider value={{username, setUsername, count, setCount}}>
      <Child1 />
      <Child2 />
      <Child3 />
      <Child4 />
    </appContext.Provider>
  );
};

export default App;

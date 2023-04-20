import React from "react";
import { useContext } from "react";
import { appContext } from "./App";


export const Child1 = () => {
  const {username} = useContext(appContext);
  return <h1> {username} </h1>;
};

export const Child2 = () => {
    const {setUsername} = useContext(appContext);
  return (
    <div>
      <button onClick={()=>setUsername("John")}>Change Username</button>
    </div>
  );
};

export const Child3 = () => {
    const {count} = useContext(appContext)
  return <h1>{count}</h1>;
};

export const Child4 = () => {
    const {setCount} = useContext(appContext)
  return (
    <div>
      <button onClick={()=>setCount((c)=>c+1)}>Change Count</button>
    </div>
  );
};

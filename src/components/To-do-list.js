import React, { useState, useReducer, createContext } from "react";
import ListGrid from "./ListGrid";
import Form from "./Form";
import { listReducer } from "../reducer";

export const ListContext = createContext();

const ToDoList = () => {
  const [tasks, setTask] = useState([
    { do: "goint to the gym", date: "20/10/2021", time: "10:20",id:Math.random() },
    { do: "goint to the gym", date: "20/10/2021", time: "10:20",id:Math.random() },
    { do: "goint to the gym", date: "20/10/2021", time: "10:20",id:Math.random() },
  ]);
  
  const [state, dispatch] = useReducer(listReducer, tasks);
  React.useEffect(() => {
      console.log(state);
  })
  return (
    <ListContext.Provider value={dispatch}>
      <div className="main-to-do-list">
        
        <Form />
        <ListGrid tasks={state} />
      </div>
    </ListContext.Provider>
  );
};

export default ToDoList;

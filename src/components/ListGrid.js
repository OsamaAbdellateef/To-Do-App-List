import Task from "./Task";
import { createContext } from "react";



const ListGrid = ({ tasks }) => {
  const style = {textAlign:'center', fontFamily:"sans-serif", fontWeight:'400'}
  return (
      <>
      {tasks.length == 0 ? <h1 style={style}>no tasks to added !</h1> : null}
        {tasks.map((task) => (
          <Task key = {Math.random()} task={task} />
        ))}
      </>
  );
};

export default ListGrid;

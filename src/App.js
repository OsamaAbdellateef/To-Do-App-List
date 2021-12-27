import React, { useState, useContext } from "react";
import Form from './components/Form';
import ToDoList from "./components/To-do-list";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <div className="App full-center">
     <ToDoList/>
    </div>
  )
}

export default App;

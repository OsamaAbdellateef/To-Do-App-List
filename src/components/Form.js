import React, { useState, useReducer, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import { listReducer } from "../reducer";
import { ListContext } from "./To-do-list";
const Form = () => {
  const [text, setText] = useState('');
  const [date ,setDate] = useState(new Date())
  const [time, onChange] = useState('10:00');
  const dispatch = useContext(ListContext);
  
  const addTask = (e) => {
    e.preventDefault();
    if(date && time && text) {
      dispatch({type:'ADD_TASK' ,text ,date : date.toISOString().split('T')[0], time})
    } else {
      console.log('nothing');
    }
    clearForm();
  }

  const clearForm = () => {
    setText('');
    setDate('');
    onChange('')
  }
  
  return (
    <form className="form flex">
      <h1 onClick = {() => console.log(date.toISOString().split('T')[0])}>To-Do List App </h1>
      <div className="row">
        <input
          value={text}
          onChange={(e) => {setText(e.target.value)}}
          className="border"
          type="text"
          placeholder="Enter the task"
          alt="do"
        />
      </div>

      <div className="w-100 main-container">
        <div className="container-one">
          <TimePicker alt="time" onChange={onChange}
          value={time}/>
        </div>
        <div className="container-two">
          <DatePicker  selected={date} onChange = {(date) => {setDate(date)}}  alt="date" className="full-center date-picker-manual" />
        </div>
        <div className="container-three">
          <input
            onClick={(e) => {addTask(e)}}
            value="Add"
            className="submit "
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;

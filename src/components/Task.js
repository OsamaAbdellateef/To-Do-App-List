import { useContext } from "react"
import { ListContext } from "./To-do-list"

const Task = ({task}) => {
    const dispatch = useContext(ListContext)
    const deleteTask =() => {
        dispatch({type:'DELETE_TASK', payload:task.id})
    }
    return (
        <div className="task">
            <h4>{task.do}<span> - time: {task.time}</span> <span> - date: {task.date}</span></h4>
            <button className="delete-btn" onClick={() => deleteTask()}>X</button>
        </div>
    )
}

export default Task

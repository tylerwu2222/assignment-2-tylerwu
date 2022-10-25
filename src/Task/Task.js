import { useState, useEffect } from "react";
import './Task.css'

const TaskCheckBox = ({ value, onClick = f => f, checked }) => {
    return (
        <input type="checkbox" onClick={onClick} className="main-form-checkbox" value={value} defaultChecked={checked} />
    )
};

const TaskDescription = ({ task, onChange = f => f }) => {
    return (
        <input className="task-description" value={task} onChange={onChange} />
    )
};



const Task = ({ taskDescription, value, onCheckFn = f => f }) => {
    const [task, setTask] = useState(taskDescription);
    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    };
    
    return (
        <>
            <li>
                <TaskCheckBox value={value} onClick={() => handleChecked()} checked={checked} />
                {/* <TaskCheckBox value={value} onClick={() => setChecked(onCheckFn())} checked={checked} /> */}
                <TaskDescription task={task} onChange={e => setTask(e.target.value)} />
                <hr className="main-form-hr"></hr>
            </li>
        </>
    )
};

export default Task;
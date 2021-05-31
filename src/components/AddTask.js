import React from 'react'
import {useState} from 'react'
const AddTask = () => {

    const [taskText,setTaskText] = useState('')
    const [taskDate,setTaskDate] = useState('')

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Enter Task you wanna Add.!</label>
                <input type='text' placeholder='Add task' value={taskText} onChange={(e) => setTaskText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Enter Day & time for Task.!</label>
                <input type='text' placeholder='Add task' value={taskDate} onChange={(e) => setTaskDate(e.target.value)}></input>
            </div>
            <div className='form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'></input>
            </div>
            <div >
                <input className='btn btn-block' type='submit' placeholder='Save Task'></input>
            </div>
        </form>
    )
}

export default AddTask

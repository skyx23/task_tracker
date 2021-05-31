import React from 'react'
import {useState} from 'react'
const AddTask = (props) => {

    const [taskText,setTaskText] = useState('')
    const [taskDate,setTaskDate] = useState('')
    const [reminder,setReminder] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!taskText) {
            alert('Task empty')
            return
        }
        if(!taskDate) {
            alert('Date Empty')
            return
        }

        props.addTask(taskText,taskDate,reminder)

        setTaskText("")
        setTaskDate('')
        setReminder(false)
    }

    return (
        <form className='add-form' 
        onSubmit={(e) =>handleSubmit(e)}>
            <div className='form-control'>
                <label>Enter Task you wanna Add.!</label>
                <input type='text' placeholder='Add task' value={taskText} 
                    onChange={(e) => setTaskText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Enter Day & time for Task.!</label>
                <input type='date' placeholder='MM/DD/YYYY' value={taskDate} maxLength={10} onChange={(e)=>{
                    setTaskDate(e.target.value)
                }}></input>
            </div>
            <div className='form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} checked={reminder} onChange={(e)=>{setReminder(e.target.checked)}}></input>
            </div>
            <div >
                <input className='btn btn-block' type='submit' value='Save Task' ></input>
            </div>
        </form>
    )
}

export default AddTask

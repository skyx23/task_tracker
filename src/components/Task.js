import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {FaClock} from 'react-icons/fa'
import {GiCheckMark} from 'react-icons/gi'

const Task = (props) => {
    return (
        <div className={props.task.done?'task done':(`task ${props.task.reminder ? 'reminder':''}`)}>
            <h3 key={props.task.id}>
                {props.task.text} 
                <div>
                <GiCheckMark className='icons' onDoubleClick={()=>{props.ondone(props.task.id)}}/>
                <FaTimes className='icons' onClick={() => props.ondelete(props.task.id)}/>
                </div>         
            </h3>
            <p>{String(props.task.date)}
            <FaClock className='icons' onClick={() => props.ontoggle(props.task.id)}/>
            </p>
        </div>
    )
}

export default Task

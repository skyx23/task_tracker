import Task from './Task'
const Tasks = (props) => {
    
    return (
        <div >{props.tasks.map((task) => {
                return <Task 
                task={task} 
                ondelete={props.ondelete} 
                ontoggle={props.ontoggle}
                ondone={props.ondone}
                />
            })}
        </div>
    )
}

export default Tasks

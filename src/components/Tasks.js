import Task from './Task'
const Tasks = (props) => {
    let tass = props.tasks
    tass = tass.sort((a,b)=>{
        return new Date(b.date) - new Date(a.date)
    })
    console.log(tass)
    return (
        <div >{tass?.map((task, index) => {
                return <Task
                key={index} 
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

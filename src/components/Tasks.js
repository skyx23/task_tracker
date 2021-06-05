import Task from './Task'
const Tasks = (props) => {

    if (props.tasks.length) {
        let tass = props.tasks
        tass = tass.sort((a,b)=>{
            return new Date(b.date) - new Date(a.date)
        })
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
    }else {
        return (
            <div>
                <h3 style={{textAlign:'center', fontSize : '30px'}}>No Tasks Added</h3>
            </div>
        )
    }
}

export default Tasks

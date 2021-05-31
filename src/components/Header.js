import Button from './Button'

const Header = (props) => {

    return (
        <div className="header">
            <h1>{props.title}</h1>
            {props.form ? <Button text='Cancel' onclick={() => props.toggleForm()}/>:<Button text='Add Task' onclick={() => props.toggleForm()}/>}           
        </div>
    )
}

export default Header

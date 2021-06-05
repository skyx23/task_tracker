import { useState,useEffect } from 'react';
import moment from 'moment';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './index.css';
import AddTask from './components/AddTask';
import {defaultData,defaultFormState} from './intialState' 

function App() {

  const [tasks, setTasks] = useState([]);
  
  const [form , setForm] = useState(defaultFormState)

  useEffect(() => {
  let dataFromStorage = localStorage.getItem('data')
  if (dataFromStorage) {
    setTasks(JSON.parse(dataFromStorage))
  }else{
    setTasks(defaultData)
  }
  let formStatefromStorage = localStorage.getItem('formState')
  if(formStatefromStorage) {
    setForm(JSON.parse(formStatefromStorage))
  } 
  },[])  
  

  const toggleForm = () => {
    setForm(!form)
    localStorage.setItem('formState',JSON.stringify(!form))
  }

  const addTask = (text,date,reminder) => {
    let newtask = {
      id : Math.floor(Math.random()*1000),
      text : text,
      date : moment(date).format('DD MMM YYYY'),
      reminder : reminder,
      done:false
    }
    console.log(newtask)
    setTasks([
      ...tasks,newtask
    ])
    localStorage.setItem('data',JSON.stringify([...tasks,newtask]))
    setForm(false)
    localStorage.setItem('formState',JSON.stringify(!form))
  }

  const deleteTask = (id) => {
    let remainingTasks = tasks.filter((task) => task.id !== id)
    setTasks(remainingTasks);
    localStorage.setItem('data',JSON.stringify(remainingTasks))
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, reminder: !task.reminder };
        } else {
          return task;
        }
      })
    );
  };

  const taskDone = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className='container'>
      <Header title='Task Tracker' toggleForm={toggleForm} form={form}/>
      {form ? <AddTask addTask={addTask}/> : ''}
      <Tasks tasks={tasks} ondelete={deleteTask} ontoggle={toggleReminder} ondone={taskDone}/>
    </div>
  );
}

export default App;

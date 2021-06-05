import { useState,useEffect } from 'react';
import moment from 'moment';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './index.css';
import AddTask from './components/AddTask';

function App() {
  let data = [
    {
      id: 1,
      text: 'First Task',
      date: moment().format('DD MMM YYYY'),
      reminder: false,
      done: false,
    },
    {
      id: 2,
      text: 'Second Task',
      date: moment().subtract(2, 'days').format('DD MMM YYYY'),
      reminder: false,
      done: false,
    },
    {
      id: 3,
      text: 'Third Task',
      date: moment().add(1, 'weeks').format('DD MMM YYYY'),
      reminder: false,
      done: false,
    },
    {
      id: 4,
      text: 'Fourth Task',
      date: moment().add(5, 'days').format('DD MMM YYYY'),
      reminder: false,
      done: false,
    },
  ]
  const [tasks, setTasks] = useState(data);

  const [form , setForm] = useState(false)

  const toggleForm = () => {
    setForm(!form)
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
    setForm(false)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
      {tasks.length ? <Tasks tasks={tasks} ondelete={deleteTask} ontoggle={toggleReminder} ondone={taskDone}/> : <h3>No Tasks added</h3>}
    </div>
  );
}

export default App;

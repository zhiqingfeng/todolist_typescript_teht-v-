import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import Todotable from './Todotable';
import { ITask } from './interfaces';

const App: FC = () => {

  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [todoList, setTodolist] = useState<ITask[]>([]);

  const handleChange = (event:ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "description"){
        setDescription(event.target.value);
    }else if(event.target.name === "date"){
        setDate(event.target.value); //convert string to number -->(Number())
    }else{
        setPriority(event.target.value);  
    }
  };

  const addTodo= (): void => {
    const newTodo = {description: description, date:date, priority:priority};
    setTodolist([...todoList, newTodo]);
    setDescription("Type here");
    setDate("Date");
    setPriority("");
    //console.log(todoList);
  }

  const completeTodo = (todoDelete:string): void =>{
    setTodolist(todoList.filter((task)=> {
      return task.description != todoDelete
    }))
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input 
              type="text" 
              placeholder='Description' 
              name='description' 
              value={description}
              onChange={handleChange} 
          />
          <input 
              type="text" 
              placeholder='Date' 
              name='date'
              value={date}
              onChange={handleChange}
          />
          <input
              type="text"
              placeholder='Priority'
              name='priority'
              value={priority}
              onChange={handleChange}
          />
        </div>
        <button onClick={addTodo}>Add</button>
      </div>
      <div className='Todotable'>
        {todoList.map((task: ITask, key:number) => {
          return <Todotable key={key} task={task}  completeTask={completeTodo} />
        })}
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const App = () => {
  const oldTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(JSON.parse(oldTasks)||[]);
  // console.log("task", tasks);
  // to store in local storage

  //CallBack function will run every single time when something task will change in component 
  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
//localstorage stores only string as value


  },[tasks])

  const handleDelete = (taskIndex) => {
    const newTasks = taskIndex.filter((task, index) => index !== taskIndex)
    setTasks(newTasks);
  }

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        {/* passing the task and filtering on its status */}
        <TaskColumn
         title="To Do" 
         tasks={tasks} 
         status="todo" 
         handleDelete = {handleDelete}/>
        <TaskColumn
         title="Doing" 
         tasks={tasks} 
         status="doing" 
         handleDelete = {handleDelete}/>
        <TaskColumn 
        title="Done" 
        tasks={tasks}
        status="done" 
        handleDelete = {handleDelete}/>
      </main>
    </div>
  );
};

export default App;
